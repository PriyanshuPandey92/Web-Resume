// For Navigation
$(document).ready(function(){
    $("#main-nav a").click(function(){
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    })
});

// For Downloading CV 
document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-cv');

    downloadButton.addEventListener('click', () => {
        // Path to your PDF file
        const pdfUrl = 'assets/images/Resume.pdf'; 

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume.pdf';
        link.style.display = 'none'; // Hide the link

        // Append the link to the body
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    });
});
