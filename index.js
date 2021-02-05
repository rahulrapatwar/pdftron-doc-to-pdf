const { PDFNet } = require('@pdftron/pdfnet-node');
const path = require('path');

const convertToPDF = async () => {
    inputFileName = 'test_missing.docx'
    outputFileName = 'test_missing'
    inputPath = path.resolve(__dirname, `./files/${inputFileName}`)
    outputPath = path.resolve(__dirname, `./files/${outputFileName}.pdf`)
    const pdfdoc = await PDFNet.PDFDoc.create();
    await pdfdoc.initSecurityHandler();
    await PDFNet.Convert.toPdf(pdfdoc, inputPath);
    pdfdoc.save(outputPath, PDFNet.SDFDoc.SaveOptions.e_linearized);
}
PDFNet.runWithCleanup(convertToPDF).then(() => {
    console.log("Successfully converted to PDF");
    process.exit(1)
}).catch(err => {
    console.log("Failed to convert to PDF");
    console.log(err);
});

