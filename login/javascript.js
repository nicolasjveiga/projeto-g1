function saveReportLocal(report) {
    const reportService = new ReportService();
    reportService.saveLocal(report);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/reports', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4) {
            if(xhr.status === 201) {
                alert('Dados salvos no servidor')
            }else {
                alert('Erro ao salvar dados no servidor')
            }
        
        }
    };
    xhr.send(JSON.stringify(report));

}