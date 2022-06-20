class PageTemplate {
    constructor(data) {
        this.data = data;
        this.title = 'Server';
        this.content = '<h1>Home page 🎅</h1>';
    }

    headHTML() {
        return ` <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title> ${this.title}</title>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
                    <link rel="manifest" href="/favicon/site.webmanifest">
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
                    <meta name="msapplication-TileColor" content="#da532c">
                    <meta name="theme-color" content="#ffffff">
                    <link rel="stylesheet" href="/css/pages/home.css">`;
    }

    headerHTML() {
        let accMenuHTML = `<a href = "/register">REGISTER</a>
                    <a href = "/login">LOGIN</a>`;
        if (this.data.user.isLoggedIn) {
            accMenuHTML = `<a href = "/account">ACCOUNT</a>
                    <a href = "/logout">LOGOUT</a>`;
        }

        return ` <header class="container">
        <div class="row main-header">
        <img src="../public/img/logo.png" alt="Logo">
            <nav>
                <a href = "/">HOME</a>
                <a href = "/404">404</a>
                ${accMenuHTML}
            </nav>
        </div>
        </header>`;
    }

    mainHTML() {
        return `<div>
        MAIN CONTENT
        </div>`;
    }

    footerHTML() {
        const initYear = 2022;
        const currentYear = (new Date()).getFullYear();
        const formatedDate = initYear === currentYear ? initYear : initYear + '-' + currentYear;

        return `<footer class="container">
        <div class="row main-footer">
        &copy; ${formatedDate}&nbsp;-&nbsp;<a href="https://github.com/IevaSta" target="_blank">Ieva</a>
        </div>
        </footer>`
    }

    render() {
        return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    ${this.headHTML()}
                </head>
                <body>
                    ${this.headerHTML()}
                <main class="container">
                    ${this.mainHTML()}
                </main>
                    ${this.footerHTML()}
                </body>
                </html>`;
    }
}

export { PageTemplate }; 