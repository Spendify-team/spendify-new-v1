import React from "react";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import NavbarCmp from "../components/NavbarCmp/NavbarCmp";


const pStyle = {
    margin: '0',
    padding: '15px 0',
    fontFamily: "Gilroy500",
    fontSize: '16px',
    opacity: '0.7',
    color: '#6c757d'
};

const titleStyle = {
    margin: '0',
    fontFamily: "Gilroy600",
    color: '#0f172a',
    opacity: '0.8'
};
const Privacy = () => {
    return (
        <>
            <NavbarCmp/>
            <section className="privacy-section padding-top padding-bottom">
                <br/>
                <div className="container">
                    <div className="row">

                        <div className='col'>
                        </div>
                        <div className="col-lg-8 col-xl-7">
                            <article className="mt-70 mt-lg-0 justify-content-center ">
                                <div className="privacy-item" id="general">
                                    <h3 className="title" style={titleStyle}>General</h3>
                                    <p style={pStyle}>Spendify Technologies built the Spendify app as a
                                        Free app. This service is provided
                                        by
                                        Spendify Technologies at no cost and is intended for use as is.
                                    </p>
                                    <p style={pStyle}>This page is used to inform visitors regarding our
                                        policies regarding the collection,
                                        use,
                                        and disclosure of Personal Information if anyone decided to use our Service.
                                    </p>
                                    <p style={pStyle}>
                                        If you choose to use our Service, then you agree to the collection and use of
                                        information in
                                        relation to this policy. The Personal Information that we collect is used for
                                        providing and
                                        improving the Service. We will not use or share your information with anyone
                                        except
                                        as
                                        described in this Privacy Policy.
                                    </p>
                                    <p style={pStyle}>
                                        The terms used in this Privacy Policy have the same meanings as in our Terms and
                                        Conditions,
                                        which are accessible at Spendify unless otherwise defined in this Privacy
                                        Policy.
                                    </p>
                                </div>
                                <div className="privacy-item" id="info">
                                    <h3 className="title" style={titleStyle}>Information Collection and
                                        Use</h3>
                                    <p style={pStyle}>For a better experience, while using our Service,
                                        we may require you to provide us
                                        with
                                        certain personally identifiable information.
                                        The information that we request will be retained by us and used as described in
                                        this
                                        privacy
                                        policy.
                                    </p>
                                    <p style={pStyle}>The app does use third party services that may
                                        collect information used to identify
                                        you.
                                        Link to privacy policy of third-party service providers used by the app
                                    </p>
                                    <ul>
                                        <li>
                                            <a href="https://www.google.com/policies/privacy/">Google Play Services</a>
                                        </li>
                                        <li>
                                            <a href="https://www.apple.com/legal/privacy/en-ww/ ">Apple Services</a>
                                        </li>
                                    </ul>
                                    <p/>
                                </div>
                                <div className="privacy-item" id="log">
                                    <h3 className="title" style={titleStyle}>Log Data</h3>
                                    <p style={pStyle}>We want to inform you that whenever you use our
                                        Service, in case of an error in the
                                        app we
                                        collect data and information (through third-party products) on your phone called
                                        Log
                                        Data.
                                        This Log Data may include information such as your device Internet Protocol
                                        (“IP”)
                                        address,
                                        device name, operating system version, the configuration of the app when
                                        utilizing
                                        our
                                        Service,
                                        the time and date of your use of the Service, and other statistics.
                                    </p>
                                </div>
                                <div className="privacy-item" id="cook">
                                    <h3 className="title" style={titleStyle}>Cookies</h3>
                                    <p style={pStyle}>
                                        Cookies are files with a small amount of data that are commonly used as
                                        anonymous
                                        unique
                                        identifiers. These are sent to your browser from the websites that you visit and
                                        are
                                        stored
                                        on your device's internal memory.
                                    </p>
                                    <p style={pStyle}>
                                        This Service does not use these “cookies” explicitly. However, the app may use
                                        third-party
                                        code and libraries that use “cookies” to collect information and improve their
                                        services. You
                                        have the option to either accept or refuse these cookies and know when a cookie
                                        is
                                        being
                                        sent to your device. If you choose to refuse our cookies, you may not be able to
                                        use
                                        some
                                        portions of this Service.
                                    </p>
                                </div>
                                <div className="privacy-item" id="service">
                                    <h3 className="title" style={titleStyle}>Service Providers</h3>
                                    <p style={pStyle}>
                                        We may employ third-party companies and individuals due to the following
                                        reasons:
                                    </p>
                                    <ul>
                                        <li style={pStyle}>
                                            To facilitate our Service;
                                        </li>
                                        <li style={pStyle}>
                                            To provide the Service on our behalf;
                                        </li>
                                        <li style={pStyle}>
                                            To perform Service-related services; or
                                        </li>
                                        <li style={pStyle}>
                                            To assist us in analyzing how our Service is used.
                                        </li>
                                    </ul>
                                    <p/>
                                    <p style={pStyle}>
                                        We want to inform users of this Service that these third parties have access to
                                        your
                                        Personal Information. The reason is to perform the tasks assigned to them on our
                                        behalf.
                                        However, they are obligated not to disclose or use the information for any other
                                        purpose.
                                    </p>
                                </div>
                                <div className="privacy-item" id="security">
                                    <h3 className="title" style={titleStyle}>Security</h3>
                                    <p style={pStyle}>
                                        We value your trust in providing us with your Personal Information, thus we are
                                        striving to
                                        use commercially acceptable means of protecting it. But remember that no method
                                        of
                                        transmission over the internet, or method of electronic storage is 100% secure
                                        and
                                        reliable,
                                        and we cannot guarantee its absolute security.
                                    </p>
                                </div>
                                <div className="privacy-item" id="link">
                                    <h3 className="title" style={titleStyle}>Links To Other Sites</h3>
                                    <p style={pStyle}>
                                        This Service may contain links to other sites. If you click on a third-party
                                        link,
                                        you will
                                        be directed to that site. Note that these external sites are not operated by us.
                                        Therefore,
                                        we strongly advise you to review the Privacy Policy of these websites. We have
                                        no
                                        control
                                        over and assume no responsibility for the content, privacy policies, or
                                        practices of
                                        any
                                        third-party sites or services.
                                    </p>
                                </div>
                                <div className="privacy-item" id="child">
                                    <h3 className="title" style={titleStyle}>Children's Policy</h3>
                                    <p style={pStyle}>
                                        These Services do not address anyone under the age of 13. We do not knowingly
                                        collect
                                        personally identifiable information from children under 13. In the case we
                                        discover
                                        that a
                                        child under 13 has provided us with personal information, we immediately delete
                                        this
                                        from
                                        our servers. If you are a parent or guardian and you are aware that your child
                                        has
                                        provided
                                        us with personal information, please contact us so that we will be able to do
                                        the
                                        necessary
                                        actions.
                                    </p>
                                </div>
                                <div className="privacy-item" id="change">
                                    <h3 className="title" style={titleStyle}>Changes to This Privacy
                                        Policy</h3>
                                    <p style={pStyle}>
                                        We may update our Privacy Policy from time to time. Thus, you are advised to
                                        review
                                        this
                                        page periodically for any changes. We will notify you of any changes by posting
                                        the
                                        new
                                        Privacy Policy on this page. These changes are effective immediately after they
                                        are
                                        posted
                                        on this page.
                                    </p>
                                </div>
                                <div className="privacy-item" id="contact">
                                    <h3 className="title" style={titleStyle}>Get In Touch</h3>
                                    <p style={pStyle}>
                                        If you have any questions or suggestions about our Privacy Policy, do not
                                        hesitate
                                        to
                                        contact us at <a href="mailto:info@spendify.ca">info@spendify.ca</a>.
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className='col'>
                        </div>
                    </div>
                </div>
                <br/>
            </section>
            <FooterCmp/>
        </>
    );
};

export default Privacy;
