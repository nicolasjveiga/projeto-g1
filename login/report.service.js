class ReportService {
    constructor(){}

    LOCAL_STORAGE_KEY = 'reports';

    saveLocal(report) {
        let reports = localStorage.getItem(this.LOCAL_STORAGE_KEY);
        reports = reports ? JSON.parse(reports) : [];
        reports.push(report);
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(reports));
        return reports;
    }
}
