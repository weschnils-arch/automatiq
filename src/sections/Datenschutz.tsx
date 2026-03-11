import { useApp } from '@/context/AppContext';

export default function Datenschutz() {
    const { t } = useApp();

    return (
        <section className="pt-32 pb-24 relative z-10 min-h-screen">
            <div className="section-container max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    {t('Datenschutzerklärung', 'Privacy Policy')}
                </h1>

                <div className="space-y-8 text-muted-foreground bg-secondary/30 p-8 rounded-2xl border border-border">

                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. {t('Datenschutz auf einen Blick', 'Privacy at a Glance')}</h2>
                        <h3 className="text-xl font-medium text-foreground mb-2">{t('Allgemeine Hinweise', 'General Notes')}</h3>
                        <p className="leading-relaxed mb-4">
                            {t(
                                'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
                                'The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you could be personally identified.'
                            )}
                        </p>
                        <h3 className="text-xl font-medium text-foreground mb-2 mt-4">{t('Datenerfassung auf dieser Website', 'Data Collection on this Website')}</h3>
                        <p className="leading-relaxed">
                            <strong>{t('Wer ist verantwortlich für die Datenerfassung auf dieser Website?', 'Who is responsible for the data collection on this website?')}</strong><br />
                            {t('Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.', 'The data processing on this website is carried out by the website operator. Their contact details can be found in the section "Information on the Responsible Party" in this privacy policy.')}
                        </p>
                        <p className="leading-relaxed mt-4">
                            <strong>{t('Wie erfassen wir Ihre Daten?', 'How do we collect your data?')}</strong><br />
                            {t('Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.', 'Your data is collected on the one hand by you communicating it to us. This may, for example, be data that you enter into a contact form.')}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. {t('Hosting', 'Hosting')}</h2>
                        <p className="leading-relaxed">
                            {t(
                                'Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die auf dieser Website erfassten personenbezogenen Daten werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln.',
                                'We host the content of our website with an external provider. The personal data collected on this website is stored on the servers of the host. This may include, in particular, IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data.'
                            )}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. {t('Allgemeine Hinweise und Pflichtinformationen', 'General and Mandatory Information')}</h2>
                        <h3 className="text-xl font-medium text-foreground mb-2">{t('Datenschutz', 'Data Protection')}</h3>
                        <p className="leading-relaxed mb-4">
                            {t(
                                'Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
                                'We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.'
                            )}
                        </p>
                        <h3 className="text-xl font-medium text-foreground mb-2 mt-4">{t('Hinweis zur verantwortlichen Stelle', 'Information on the Responsible Party')}</h3>
                        <p className="leading-relaxed mb-4">
                            {t('Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:', 'The responsible party for data processing on this website is:')}<br /><br />
                            AUTOMIQ LLC<br />
                            30 N Gould St Ste N<br />
                            Sheridan, WY 82801<br />
                            USA<br /><br />
                            E-Mail: contact@automiq.com
                        </p>
                        <h3 className="text-xl font-medium text-foreground mb-2 mt-4">{t('Widerruf Ihrer Einwilligung zur Datenverarbeitung', 'Revocation of your Consent to Data Processing')}</h3>
                        <p className="leading-relaxed mb-4">
                            {t('Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.', 'Many data processing operations are only possible with your express consent. You can revoke your consent at any time. The legality of the data processing carried out before the revocation remains unaffected by the revocation.')}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. {t('Datenerfassung auf dieser Website', 'Data Collection on this Website')}</h2>
                        <h3 className="text-xl font-medium text-foreground mb-2">{t('Server-Log-Dateien', 'Server Log Files')}</h3>
                        <p className="leading-relaxed mb-4">
                            {t('Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:', 'The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:')}
                        </p>
                        <ul className="list-disc list-inside leading-relaxed mb-4 ml-4">
                            <li>{t('Browsertyp und Browserversion', 'Browser type and browser version')}</li>
                            <li>{t('verwendetes Betriebssystem', 'Operating system used')}</li>
                            <li>{t('Referrer URL', 'Referrer URL')}</li>
                            <li>{t('Hostname des zugreifenden Rechners', 'Hostname of the accessing computer')}</li>
                            <li>{t('Uhrzeit der Serveranfrage', 'Time of the server request')}</li>
                            <li>{t('IP-Adresse', 'IP address')}</li>
                        </ul>
                        <p className="leading-relaxed">
                            {t('Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.', 'These data are not merged with other data sources.')}
                        </p>

                        <h3 className="text-xl font-medium text-foreground mb-2 mt-6">{t('Kontaktformular', 'Contact Form')}</h3>
                        <p className="leading-relaxed">
                            {t('Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.', 'If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in the case of follow-up questions. We do not share this data without your consent.')}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
