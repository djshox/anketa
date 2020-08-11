import React, { useState } from 'react';
import "./head.css";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';


const Head = () => {
    const { t, i18n } = useTranslation();
    const [lang, changeLang] = useState(localStorage.getItem('i18nextLng'))

    function changeLanguage(lang) {
        changeLang(lang)
        i18n.changeLanguage(lang);
    }

    function getColor(til) {
        return lang === til ? "text-white my-n1 py-0 text-danger" : "text-white my-n1 py-0"
    }

    return (
        <div>
            <Row >
                <Col span={24} className="bg-dark text-white " style={{ textAlign: "center" }} >
                    <Row>
                        <Col span={23}>
                            <h3 className=" mt-2 text-white"> {t('head_page')} </h3>
                        </Col>
                        <Col span={1}>
                            <ButtonGroup
                                disableRipple
                                orientation="vertical"
                                size="small"
                                variant="text"
                            >
                                <Button className={getColor("en")} disableRipple onClick={() => changeLanguage('en')}>en</Button>
                                <Button className={getColor("ru")} disableRipple onClick={() => changeLanguage('ru')}>ru</Button>
                                <Button className={getColor("uz")} disableRipple onClick={() => changeLanguage('uz')}>uz</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );

}
export default Head; 