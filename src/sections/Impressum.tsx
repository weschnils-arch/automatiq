import { useApp } from '@/context/AppContext';

export default function Impressum() {
    const { t } = useApp();

    return (
        <section className="pt-32 pb-24 relative z-10 min-h-screen">
            <div className="section-container max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    {t('Impressum', 'Legal Notice')}
                </h1>

                <div className="space-y-8 text-muted-foreground bg-secondary/30 p-8 rounded-2xl border border-border">
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">{t('Angaben gemäß § 5 TMG', 'Information pursuant to § 5 TMG')}</h2>
                        <p className="leading-relaxed">
                            <strong>AUTOMIQ LLC</strong><br />
                            30 N Gould St Ste N<br />
                            Sheridan, WY 82801<br />
                            USA
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{t('Vertreten durch', 'Represented by')}</h3>
                        <p className="leading-relaxed">
                            {t('Die Geschäftsführung (Managing Member)', 'The Managing Member')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{t('Kontakt', 'Contact')}</h3>
                        <p className="leading-relaxed">
                            E-Mail: contact@automiq.com<br />
                            Website: automiq.com
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{t('Registereintrag', 'Registration')}</h3>
                        <p className="leading-relaxed">
                            {t('Eintragung im Handelsregister von Wyoming, USA.', 'Registered in the Commercial Register of Wyoming, USA.')}<br />
                            <strong>Filing ID:</strong> 2026-001856987<br />
                            <strong>Type:</strong> Limited Liability Company - Domestic<br />
                            <strong>Formed In:</strong> Wyoming
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{t('EU-Streitschlichtung', 'EU Dispute Resolution')}</h3>
                        <p className="leading-relaxed">
                            {t('Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: ', 'The European Commission provides a platform for online dispute resolution (OS): ')}
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                https://ec.europa.eu/consumers/odr/
                            </a>.<br />
                            {t('Unsere E-Mail-Adresse finden Sie oben im Impressum.', 'You can find our e-mail address in the legal notice above.')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{t('Verbraucherstreitbeilegung/Universalschlichtungsstelle', 'Consumer Dispute Resolution/Universal Arbitration Board')}</h3>
                        <p className="leading-relaxed">
                            {t('Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.', 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{t('Haftung für Inhalte', 'Liability for Contents')}</h3>
                        <p className="leading-relaxed">
                            {t('Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.', 'As service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
