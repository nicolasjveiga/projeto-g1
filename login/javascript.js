function saveReportLocal(report) {
    const reportService = new ReportService();
    reportService.saveLocal(report);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/reports', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(report));

}