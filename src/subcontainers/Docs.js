import docLogo from '../icons/doc.png'

function Docs() {
  return (
    <div className="docs_container">
        <div className="docs_margin">
            <div className="docs_string">
                <div className="docs_title">Документы</div>
                <div className="docs_grid">
                    <div className="docs_boxs">
                        <div className="docs_icon"><img src={docLogo} /></div>
                        <div className="docs_download">Образец полиса.pdf</div>
                        <div className="docs_pdf">PDF, 148.8 КБ</div>
                    </div>
                    <div className="docs_boxs">
                        <div className="docs_icon"><img src={docLogo} /></div>
                        <div className="docs_download">Правила страхования.pdf</div>
                        <div className="docs_pdf">PDF, 945.5 КБ</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Docs;


