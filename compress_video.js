const ffmpeg = require('ffmpeg-static');
const ffprobe = require('ffprobe-static');
const { spawn, execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const inputFile = path.resolve('./assets/videos/promotionalVideo.mp4');
const tempOutputFile = path.resolve('./assets/videos/promotionalVideo_temp.mp4');
const targetSizeMB = 48; // Aim for 48MB to be safely under 50MB

console.log('Getting video info...');
const ffprobeCmd = ffprobe.path;

execFile(ffprobeCmd, ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', inputFile], (error, stdout, stderr) => {
    if (error) {
        console.error('Error getting duration:', error);
        process.exit(1);
    }
    const duration = parseFloat(stdout);
    console.log(`Duration: ${duration} seconds`);

    // Calculate bitrate
    // Target Size (bits) = Duration * Bitrate
    const targetTotalBitrate = (targetSizeMB * 1024 * 1024 * 8) / duration;
    
    const audioBitrate = 128 * 1000; // 128k audio
    const videoBitrate = targetTotalBitrate - audioBitrate;
    
    console.log(`Target Total Bitrate: ${Math.floor(targetTotalBitrate/1000)}k`);
    console.log(`Target Video Bitrate: ${Math.floor(videoBitrate/1000)}k`);

    if (videoBitrate <= 100000) { // If less than 100k, it might be too low quality
        console.warn("Warning: Target bitrate is very low!");
    }

    const ffmpegCmd = ffmpeg;
    // Two-pass encoding is better for size targeting, but single pass is faster and usually sufficient if we undershoot.
    const args = [
        '-y',
        '-i', inputFile,
        '-c:v', 'libx264',
        '-b:v', Math.floor(videoBitrate),
        '-maxrate', Math.floor(videoBitrate * 1.5), // Allow some burst
        '-bufsize', Math.floor(videoBitrate * 2),
        '-c:a', 'aac',
        '-b:a', '128k',
        tempOutputFile
    ];

    console.log('Starting compression...');
    const child = spawn(ffmpegCmd, args);

    child.stderr.on('data', (data) => {
        // Output progress if needed, but keeping it clean
        // process.stdout.write('.');
    });

    child.on('close', (code) => {
        if (code === 0) {
            console.log('\nCompression finished successfully.');
            const stats = fs.statSync(tempOutputFile);
            const sizeMB = stats.size / 1024 / 1024;
            console.log(`New file size: ${sizeMB.toFixed(2)} MB`);
            
            if (sizeMB < 50) {
                fs.renameSync(tempOutputFile, inputFile);
                console.log('Original file replaced.');
            } else {
                console.error('Error: File is still too large!');
                // fs.unlinkSync(tempOutputFile);
            }
        } else {
            console.error(`\nffmpeg process exited with code ${code}`);
        }
    });
});
