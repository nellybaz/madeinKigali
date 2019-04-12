import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/pages/licences.css';
import Header from '../components/header';

import CombineWith from '../components/combine';
import Footer from '../components/footer';
import BuyerLicence from './buyer_licence';

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

class SellerLicence extends Component {

    render() {

        return (
            <div style={{ background: 'white' }}>
                <Header />
                <section>

                    <div className="top-bar">

                        <Link to={BuyerLicence}>Buyer Licence Agreement</Link>
                        <Link className="_active" to={'#'}>Seller Licence Agreement</Link>

                    </div>

                    <div className="terms">
                        <h1>Seller License Agreement</h1>

                        <p>
                            <strong>
                                Patternbank understands that getting your head around licenses can be a confusing process. Below, we have listed clear information to help make things as simple as possible.
                    </strong>
                        </p>
                        <p>
                            Patternbank will sell your designs in two main types of license: <strong>Non-Exclusive Standard License with optional Extended options</strong> and <strong>Exclusive Premium Licenses</strong> to suit your buyers specific needs. The Standard/Extended Licensed designs
                            can be downloaded multiple times and will be used by various licensees (so a chance for one design to generate many sales). Your design can be sold as a Premium design. Premium Exclusive License designs are sold exclusively to the buyer at a higher price point and are then
                            removed from the site giving the buyer exclusive rights to use the design. Premium designs must be exclusive to the buyer with no other designs being similar to them (look, layout or colourway).
                    </p>

                        <p>
                            In order to sell on Patternbank, you must agree to the following agreement to protect all parties involved. On ticking the agreement, uploading designs and/or using the Patternbank Studio website you will be agreeing to your acceptance of the Sellers License Agreement, and you wholly agree to the following terms and conditions.
</p>
                        <p>
                            Here is what info you need to be aware of when uploading designs onto Patternbank:-
<ul>
                                <li>Be original & creative.</li>
                                <li>All designs uploaded must be exclusive to Patternbank.</li>
                                <li>No stock art use – use your own original work when creating artwork.</li>
                                <li>Do not upload any designs that have been purchased prior to Patternbank.</li>
                                <li>Once a design is uploaded do not resell elsewhere.</li>
                                <li>You are free to sell other designs elsewhere.</li>
                                <li>No use of copyrighted imagery.</li>
                                <li>No illegal, pornographic or prohibited items.</li>
                                <li>Premium designs must be original & exclusive.</li>
                                <li>Premium designs should not be resold or shared (Pinterest, Facebook, etc).</li>
                            
                            </ul>

                            Please read below for our full terms and conditions.
<h3>
                                DESIGN CONTRIBUTOR AGREEMENT
</h3>

                            <strong>


                                IMPORTANT NOTICE: PLEASE READ CAREFULLY BEFORE ENTERING INTO THIS AGREEMENT. THIS AGREEMENT IS A LEGAL AGREEMENT BETWEEN YOU AND PATTERNBANK LTD, INCORPORATED AND REGISTERED IN ENGLAND AND WALES WITH COMPANY NUMBER 08436656 WHOSE REGISTERED OFFICE IS AT 86-90 Paul Street, London EC2A 4NE (“PATTERNBANK”).
<br />
                                BY CLICKING ‘I ACCEPT’ BELOW, YOU WILL HAVE SIGNALLED YOUR AGREEMENT TO THESE TERMS AND CONDITIONS. PATTERNBANK WILL BE DEEMED TO HAVE ENTERED INTO THIS AGREEMENT ONCE YOU HAVE CLICKED ‘I ACCEPT’.
<br />
                                IF YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT, YOU MUST NOT UPLOAD A DESIGN TO WWW.PATTERNBANK.COM.
<br />
                            </strong>
                            <h3>
                                1. DEFINITIONS
</h3>

                            <strong>
                                "Accepted Design"
</strong>
                            means either the Accepted Standard Design or Accepted Premium Design (as applicable).
                            
<strong>“Accepted Premium Design”</strong> means the Design uploaded by you to the Website and accepted by Patternbank for inclusion in the Premium Section.
                            
<strong>“Accepted Standard Design”</strong> means the Design uploaded by you to the Website and accepted by Patternbank for inclusion in the Standard Section.
                            
<strong>“Business Day” </strong>means a day (other than a Saturday, Sunday or public holiday) when banks in London are open for business.
                            
<strong>"Design" </strong>means a print, pattern or apparel graphic and shall include all metadata, keywords, descriptions and captions associated with the Design.
                            
<strong>"Intellectual Property Rights"</strong> means all copyright, patents, database rights, registered and unregistered design rights, topography rights, trademarks and service marks and applications for any of the foregoing, together with all trade secrets, know-how, rights to confidence and other intellectual and industrial property rights in all parts of the world.
                            
<strong>“Licensed Rights” </strong>has the meaning given to it in clause 3.1.
                            
<strong></strong>“Licensee” means any person who is granted a licence to use an Accepted Design via the Website in accordance with the terms of the Patternbank Licensing Agreement.
                            
<strong>“Patternbank Licensing Agreement” </strong>means the agreement under which Patternbank licenses an Accepted Design to a Licensee.
                            
<strong>“Premium Section"</strong> the section of the Website containing Designs, each of which may only be sold on an exclusive, one-off basis to only one Licensee.
                            
<strong>“Price”</strong> means the licence fee in relation to the Accepted Design as set by us in accordance with clause [6.1] which shall form the basis for the fee that is charged to Licensees in accordance with the Patternbank Licensing Agreement.
                            
<strong>“Standard Section”</strong> the section of the Website containing Designs, each of which may be sold to multiple Licensees.
                            
<strong>“Website”</strong> means patternbank.com..
                            
<h3>
                                2. SUBMISSION, ACCEPTANCE AND PROPERTY OF DESIGNS
</h3>

                            2.1. Upon submission of a Design to the Website, Patternbank shall, at its sole discretion, decide whether such Design shall be either an Accepted Standard Design or an Accepted Premium Design and shall, upon making such decision, e-mail you to confirm the same.
<br />
                            2.2. Patternbank may accept or reject any Design submitted to it in its sole and absolute discretion. Patternbank also reserves the right to:
<br />
                            2.2.1.remove an Accepted Design from the Website;
<br />
                            2.2.2.upgrade an Accepted Standard Design to an Accepted Premium Design; and
<br />
                            2.2.3.downgrade an Accepted Premium Design to an Accepted Standard Design at any time at its sole discretion and, upon doing so, shall confirm the same to you via e-mail.
<br />
                            2.3. Subject to the terms of this agreement, all Intellectual Property Rights in an Accepted Design shall at all times be and remain your property.
<br />
                            2.4. You hereby waive in favour of Patternbank and all its assignees and successors in title all moral rights in the Accepted Design (i.e. the right to be identified as its author and object to its derogatory treatment) to which you may be entitled under the Copyright, Designs and Patents Act 1988 as amended from time to time and under all similar legislation from time to time in force anywhere in the world.
<br />
                            <h3>


                                3. GRANT OF LICENCE
</h3>
                            3.1. In consideration of payment to you of the Price, you hereby grant to Patternbank either a non-exclusive licence to use the Accepted Standard Design or an exclusive licence to use the Accepted Premium Design (as applicable) for the full period of copyright in it including all periods of renewal, extension and revival of the copyright and thereafter in perpetuity and all necessary consents under the Copyright, Designs and Patents Act 1988 as amended from time to time or any enactment that replaces it to enable us to publish, exhibit, use and otherwise exploit an Accepted Design whether alone or incorporated in or in conjunction with other works worldwide and in all formats and media now known or hereinafter devised and, in particular, to sub-license the Accepted Design to a Licensee in accordance with the terms of the Patternbank Licensing Agreement and to promote the Website (the “Licensed Rights”).
<br />
                            3.2. You grant to Patternbank complete and sole discretion regarding the terms and conditions of licensing the Accepted Design to a Licensee and any other third party and acknowledge that Patternbank does not guarantee that the Accepted Design will be licensed accordingly. Notwithstanding the foregoing, Patternbank acknowledges it
<br />
                            3.3. Patternbank shall not be liable to you for any costs, expenses, loss or damage (whether direct, indirect or consequential and whether economic or other) arising
<br />
                            3.3.1. a Licensee, or any other third party, breaching and/or exceeding the rights
<br />
                            3.3.2. any unauthorised access to the Website which results in a breach of your Intellectual Property Rights in the Accepted Design.
<br />

                            <h3>


                                4. YOUR UNDERTAKINGS</h3>
                            4.1. You hereby warrant and undertake that:
<br />
                            4.1.1. you are the sole owner of the Intellectual Property Rights in the Accepted Design and have full authority to enter into this agreement;
<br />
                            4.1.2. you have not licensed any Intellectual Property Rights in the Accepted Design to any third party prior to submitting it to the Website;
<br />
                            4.1.3. all captions, metadata, descriptions, headlines and tags in relation to the Accepted Design are accurate and truthful;
<br />
                            4.1.4. the Accepted Design does not incorporate any material that infringes the Intellectual Property Rights of any third party;
<br />
                            4.1.5. the Accepted Design does not contain any obscene, blasphemous or defamatory matter, and its exploitation shall not place any person in contempt of court, in breach of any provision of any statute or give rise to any other criminal or civil liability;
<br />
                            4.1.6. you are not aware, having made full and reasonable enquiry, of any claim by any third party that the Accepted Design or any pre.existing material incorporating the Accepted Design or included within the Accepted Design, or the exploitation of the Accepted Design by either party, has infringed or will infringe any Intellectual Property Rights or any other rights of any third party and you agree that you shall immediately inform Patternbank if you become aware of any such claim; and
<br />
                            4.1.7. you have used all reasonable endeavours to secure all third-party permissions and releases necessary to grant the Licensed Rights to Patternbank and have made or will make in a timely manner all payments due to any such third parties necessary to enable Patternbank to exercise the rights granted to it under this agreement. You hereby acknowledge that Patternbank shall not be liable for any such payments.
<br />
                            4.2. You hereby indemnify and hold harmless Patternbank and shall at all times keep Patternbank indemnified against all actions, proceedings, costs, claims and damages whatsoever incurred by or awarded against Patternbank and compensation agreed by Patternbank in consequence of any breach or non.performance by you of any of the warranties and undertakings in this agreement.
<br />
                            <h3>
                                5. PROTECTION OF INTELLECTUAL PROPERTY</h3>
                            5.1. Patternbank shall immediately notify you in writing giving full particulars if any of the following matters come to its attention:
<br />
                            5.1.1. any actual, suspected or threatened infringement of the Intellectual Property Rights in the Accepted Design;
<br />
                            5.1.2. any claim made or threatened that the Accepted Design infringes the rights of any third party; or
<br />
                            5.1.3. any other form of attack, charge or claim to which the Intellectual Property Rights in the Accepted Design may be subject.
<br />
                            5.2. In respect of any of the matters listed in clause 5.1, it is acknowledged that, subject to clause 4.2:
<br />
                            5.2.1. you shall, at your absolute discretion, decide what action to take, if any;
<br />
                            5.2.2. you shall have exclusive control over, and conduct of, all claims and proceedings;
<br />
                            5.2.3. Patternbank shall not make any admissions other than to you and Patternbank shall, at your cost, provide you with all assistance that you may reasonably require in the conduct of any claims or proceedings; and
<br />
                            5.2.4. you shall bear the cost of any proceedings and shall be entitled to retain all sums recovered in any action for your own account.
<br />
                            <h3>

                                6. PRICING AND PAYMENT</h3>
                            6.1. Once a Design has been confirmed, in accordance with clauses 2.1 and 2.2, as either an Accepted Standard Design or an Accepted Premium Design, we shall set a Price for the Accepted Design and we shall be entitled to amend the Price at our sole and absolute discretion at any time, but only with prospective effect.
<br />
                            6.2. In full and final consideration of the upload of the Accepted Design and the grant of the rights hereunder, Patternbank agrees to pay you the Price in respect of each Accepted Design it licenses to a Licensee in accordance with the terms of the Patternbank Licensing Agreement.
<br />
                            6.3. When a Licensee buys a licence of an Accepted Design in accordance with the terms of the Patternbank Licensing Agreement, Patternbank shall notify you via an automated email which shall stipulate the Price (at the time the Accepted Design was licensed) to be credited to your registered account on the Website and, once credited, you may transfer such funds to your Paypal account in accordance with the instructions set out on the Website. You acknowledge that Patternbank shall not be in breach of this clause if your email spam filter (or any similar technology) prevents any Patternbank notification email from arriving in your inbox.
<br />
                            6.4. You shall be responsible for the filing of all tax returns and the payment of all income tax and charges of a similar nature raised or charged in respect of all monies due to you pursuant to this agreement.
<br />
                            6.5. You expressly agree and acknowledge that any payment due under clause 6.2 is in full and final compensation for all rights granted hereunder and (without prejudice to the generality of the foregoing) you expressly acknowledge that you shall not be entitled to any further fees or compensation from Patternbank in respect of the exploitation of the Accepted Design.
<br />
                            <h3>
                                7. TERM AND TERMINATION</h3>
                            7.1. This agreement shall continue until terminated by either party in accordance with this clause 7.
<br />
                            7.2. This agreement may be terminated immediately by either party for failure of the other party to comply with any material term of the agreement, if after thirty 30 days of receipt of notice of such failure, the default is not cured.
<br />
                            7.3. You shall have the right to terminate this agreement immediately by either removing the Accepted Design from the Website or closing down your registered account on the Website.
<br />
                            7.4. Upon termination of this agreement for any reason and subject to any express provisions set out elsewhere in this agreement:
<br />
                            7.4.1. all rights and licences granted pursuant to this agreement shall cease, save that:
<br />
                            7.4.1.1. Patternbank’s right to use the Accepted Design to promote the Website under clause 3.1 shall continue following the date of termination, albeit solely for use within existing promotional material at the date of termination; and
<br />
                            7.4.1.2. such termination will not affect the terms of any Patternbank Licensing Agreement and any such licence will continue in full force and effect according to its terms.
<br />
                            7.4.2. unless already removed, the Accepted Design may be removed from the Website within [28] Business Days of the date of termination.
<br />
                            <h3>
                                8. MISCELLANEOUS
</h3>
                            8.1. Patternbank shall be entitled to assign or license all the rights granted to it under this agreement to any third party without notice to you. You shall not be entitled to assign or sub-license your rights under this agreement.
<br />
                            8.2. All notices to be served in accordance with this agreement may be served by email. The email address of Patternbank shall be as displayed on the Website from time to time and your email address shall be as set out in your registered account details on the Website, as may be amended from time to time. For the avoidance of doubt, your email address shall not be disclosed to any other party by Patternbank, save for its employees, officers, representatives or advisers who need to know such information for the purposes of carrying out Patternbank's obligations under this agreement and as may be required by law, a court of competent jurisdiction, any governmental or regulatory authority or if we sell Patternbank or any of its assets.
<br />
                            8.3. If any provision or part-provision of this agreement is or becomes invalid, illegal or unenforceable, it shall be deemed modified to the minimum extent necessary to make it valid, legal and enforceable. If such modification is not possible, the relevant provision or part-provision shall be deemed deleted. Any modification to or deletion of a provision or part-provision under this clause shall not affect the validity and enforceability of the rest of this agreement
<br />
                            8.4. This agreement constitutes the entire agreement between the parties and supersedes and extinguishes all previous agreements, promises, assurances, warranties, representations and understandings between them, whether written or oral, relating to its subject matter.
<br />
                            8.5. This agreement shall be governed by and read in and construed in accordance with the Laws of England and the parties hereto submit to the exclusive jurisdiction of the Courts of England and Wales for the settlement of any disputes hereunder.
</p>
                    </div>
                </section>

                <Footer />

            </div>

        );
    }
}

export default withRouter(SellerLicence);
