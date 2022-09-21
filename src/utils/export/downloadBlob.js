export default function downloadBlob(content, filename, contentType) {
    // Create a blob
    var blob = new Blob([content], {
        type: contentType
    });
    var url = URL.createObjectURL(blob);

    // Create a link to download it
    var download = document.createElement('a');
    download.href = url;
    download.setAttribute('download', filename);
    download.click();
}