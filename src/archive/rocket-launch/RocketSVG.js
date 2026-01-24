// src/components/RocketSVG.js
import React from 'react';

export default function RocketSVG() {
    return (
        <g id="s-launch-rocket">
            {/* s-launch-side1 */}
            <g id="s-launch-side1">
                <g>
                    <rect x="443" y="715" width="20" height="119" rx="10" fill="none"/>
                    <rect id="s-launch-side1FlameBg" x="443" y="715" width="20" height="109" rx="10" fill="#ff6d00"/>
                    <rect x="447" y="720" width="12" height="32" rx="6" fill="#fed50f"/>
                    <g id="s-launch-side1Flame">
                        <rect x="448" y="721" width="10" height="18" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                        <rect x="448" y="739" width="10" height="12" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                        <rect x="448" y="751" width="10" height="18" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                        <rect x="448" y="769" width="10" height="12" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                    </g>
                    <rect x="449" y="722" width="8" height="28" rx="4" fill="#fff"/>
                    <rect x="443" y="760" width="20" height="54" fill="url(#linear-gradient-2)"/>
                </g>
                <g>
                    <polygon points="464 710 444 710 440 720 468 720 464 710" fill="#7321b1"/>
                    <polygon points="442 715 440 720 468 720 466 715 442 715" fill="#a80089"/>
                </g>
                <rect x="441" y="683" width="26" height="27" fill="#b33ae6"/>
                <rect x="458" y="684.5" width="8" height="24.5" fill="#c159ea"/>
                <path d="M467,683H441V583a23.79,23.79,0,0,1,8.43-18.17h0a7.08,7.08,0,0,1,9.14,0h0A23.79,23.79,0,0,1,467,583Z" fill="#fff"/>
                <path d="M449.43,564.87h0a7.08,7.08,0,0,1,9.14,0h0A23.79,23.79,0,0,1,467,583V683H448" fill="none" stroke="#d6cbff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                <line x1="442" y1="585" x2="469" y2="585" fill="none" stroke="#d6cbff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                <line x1="442" y1="673" x2="469" y2="673" fill="none" stroke="#d6cbff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                <line x1="442" y1="608" x2="453" y2="608" fill="none" stroke="#d9b5ff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                <rect x="441.5" y="636" width="26.5" height="8" fill="none" stroke="#d9b5ff" strokeLinejoin="round" strokeWidth="2"/>
                <path d="M440,614h4a5,5,0,0,1,5,5v9a5,5,0,0,1-5,5h-4a0,0,0,0,1,0,0V614A0,0,0,0,1,440,614Z" fill="#d9b5ff"/>
                <path d="M440,648h4a5,5,0,0,1,5,5v9a5,5,0,0,1-5,5h-4a0,0,0,0,1,0,0V648A0,0,0,0,1,440,648Z" fill="#d9b5ff"/>
                <path d="M448,683l-7,0V583a23.79,23.79,0,0,1,8.43-18.17" fill="none" stroke="#af75ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
            </g>

            {/* s-launch-main */}
            <g id="s-launch-main">
                <g>
                    <circle cx="494" cy="740" r="30" fill="none"/>
                    <rect x="484" y="731" width="20" height="119" rx="10" fill="none"/>
                    <circle id="s-launch-mainFlameCircle1" cx="494" cy="740" r="25" fill="#ff6d00"/>
                    <rect id="s-launch-mainFlameBg" x="484" y="731" width="20" height="109" rx="10" fill="#ff6d00"/>
                    <circle id="s-launch-mainFlameCircle2" cx="494" cy="740" r="16" fill="#fed50f"/>
                    <g>
                        <rect x="488" y="736" width="12" height="32" rx="6" fill="#fed50f"/>
                        <g id="s-launch-mainFlame">
                            <rect x="489" y="737" width="10" height="18" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                            <rect x="489" y="755" width="10" height="12" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                            <rect x="489" y="767" width="10" height="18" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                            <rect x="489" y="785" width="10" height="12" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                        </g>
                        <rect x="490" y="738" width="8" height="28" rx="4" fill="#fff"/>
                        <rect x="484" y="776" width="20" height="54" fill="url(#linear-gradient-3)"/>
                    </g>
                    <circle id="s-launch-mainFlameCircle3" cx="494" cy="740" r="13" fill="#fff"/>
                </g>
                <rect x="461" y="611" width="16" height="8" rx="4" fill="#c447ec" stroke="#c17cf4" strokeMiterlimit="10" strokeWidth="1.5"/>
                <rect x="461" y="674" width="16" height="8" rx="4" fill="#c447ec" stroke="#c17cf4" strokeMiterlimit="10" strokeWidth="1.5"/>
                <g>
                    <path d="M515,710H473V455.62a41.67,41.67,0,0,1,16.4-33.12h0a7.59,7.59,0,0,1,9.2,0h0A41.67,41.67,0,0,1,515,455.62Z" fill="#ead3ff"/>
                    <path d="M498.6,422.5h0a7.59,7.59,0,0,0-9.2,0h0c-.83.64-1.62,1.31-2.4,2a41.62,41.62,0,0,1,14,31.12V543a7,7,0,0,1-7,7H484v13h17V703a7,7,0,0,1-7,7h21V455.62A41.67,41.67,0,0,0,498.6,422.5Z" fill="#fff"/>
                    <path d="M478.5,435a41.55,41.55,0,0,0-5.5,20.67V656h4a7,7,0,0,0,7-7V455.62A41.55,41.55,0,0,0,478.5,435Z" fill="#d1a3ff"/>
                </g>
                <rect x="473" y="537" width="42" height="13" fill="#cea4ff" opacity="0.75"/>
                <rect x="473" y="697" width="42" height="13" fill="#cea4ff" opacity="0.75"/>
                <g>
                    <g>
                        <circle cx="494" cy="498" r="10" fill="#ff2b2a"/>
                        <path d="M494,488a9.94,9.94,0,0,0-5.13,1.43,1,1,0,0,0,.53.17h4.8a1.2,1.2,0,0,1,1.2,1.2,1.2,1.2,0,0,0,1.2,1.2h4a1,1,0,0,1,0,2h-5.4a1,1,0,0,0,0,2H498a1,1,0,0,1,1,1,1,1,0,0,0,1,1h4A10,10,0,0,0,494,488Z" fill="#ff9424"/>
                        <rect x="491.2" y="497.4" width="4" height="4" rx="2" fill="#ff9424"/>
                        <path d="M487,500a1,1,0,0,0,0-2h-3a10.2,10.2,0,0,0,.2,2Z" fill="#ff9424"/>
                        <path d="M489.8,502.4H485a9.76,9.76,0,0,0,1.29,2h3.48a1,1,0,1,0,0-2Z" fill="#ff9424"/>
                        <path d="M503.6,499.4a1.2,1.2,0,0,0-1.2,1.2,1.17,1.17,0,0,0,.87,1.13,9.53,9.53,0,0,0,.62-2.33Z" fill="#ff9424"/>
                        <path d="M499.2,506a1,1,0,0,1,1-1h.2a1,1,0,0,0,0-2h-6.8a1,1,0,0,0-1,1,1,1,0,0,1-1,1h-.4a1,1,0,0,0,0,2h3a1,1,0,0,1,1,.92,9.82,9.82,0,0,0,4.14-1.46A1,1,0,0,1,499.2,506Z" fill="#ff5f29"/>
                        <rect x="489.6" y="492" width="2" height="2" rx="1" fill="#ff5f29"/>
                        <path d="M487,492.8h-1.53a10.16,10.16,0,0,0-.94,2H487a1,1,0,0,0,0-2Z" fill="#ff5f29"/>
                        <path d="M499.41,489.6h-2a.8.8,0,0,0,0,1.6h2.4a.79.79,0,0,0,.78-.71A8.58,8.58,0,0,0,499.41,489.6Z" fill="#ff2b2a"/>
                        <rect x="493.6" y="504" width="3" height="2" rx="1" transform="translate(990.2 1010) rotate(-180)" fill="#ff2b2a"/>
                    </g>
                    <circle cx="494" cy="498" r="10" fill="#ffff80" opacity="0.4"/>
                    <circle cx="494" cy="498" r="13" fill="none" stroke="#b86bf4" strokeMiterlimit="10"/>
                    <path d="M494,485a13,13,0,0,1,0,26" fill="none" stroke="#cda1e4" strokeLinecap="round" strokeMiterlimit="10"/>
                </g>
                <g>
                    <g>
                        <path d="M484,550H473V512h2.24a6.23,6.23,0,0,1,6.21,5.74Z" fill="#ba4ae8"/>
                        <polygon points="473 512 473 550 478 550 475 512 473 512" fill="#b33ae6"/>
                    </g>
                    <g>
                        <path d="M504,550h11V512h-2.24a6.23,6.23,0,0,0-6.21,5.74Z" fill="#ba4ae8"/>
                        <path d="M514,520.59,511.5,550H515V517A9.37,9.37,0,0,0,514,520.59Z" fill="#b33ae6"/>
                    </g>
                </g>
                <g>
                    <rect x="473" y="552" width="42" height="24" fill="#ba4ae8"/>
                    <rect x="473" y="552" width="11" height="24" fill="#b33ae6"/>
                    <rect x="504" y="552" width="11" height="24" fill="#c159ea"/>
                    <line x1="473" y1="551" x2="515" y2="551" fill="none" stroke="#b366f3" strokeMiterlimit="10" strokeWidth="2"/>
                    <line x1="473" y1="577" x2="515" y2="577" fill="none" stroke="#b366f3" strokeMiterlimit="10" strokeWidth="2"/>
                </g>
                <g>
                    <rect x="473" y="604" width="42" height="24" fill="#ba4ae8"/>
                    <rect x="473" y="604" width="11" height="24" fill="#b33ae6"/>
                    <rect x="504" y="604" width="11" height="24" fill="#c159ea"/>
                    <line x1="473" y1="603" x2="515" y2="603" fill="none" stroke="#b366f3" strokeMiterlimit="10" strokeWidth="2"/>
                    <line x1="473" y1="629" x2="515" y2="629" fill="none" stroke="#b366f3" strokeMiterlimit="10" strokeWidth="2"/>
                </g>
                <g>
                    <rect x="473" y="456" width="42" height="10" fill="#ba4ae8"/>
                    <rect x="473" y="456" width="11" height="10" fill="#b33ae6"/>
                    <rect x="504" y="456" width="11" height="10" fill="#c159ea"/>
                    <line x1="473" y1="455" x2="515" y2="455" fill="none" stroke="#b366f3" strokeMiterlimit="10" strokeWidth="2"/>
                    <line x1="473" y1="467" x2="515" y2="467" fill="none" stroke="#b366f3" strokeMiterlimit="10" strokeWidth="2"/>
                </g>
                <g>
                    <path d="M484,517h10.5a1.5,1.5,0,0,1,1.5,1.5V533" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <line x1="490" y1="525" x2="496" y2="525" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <line x1="492" y1="531" x2="496" y2="531" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
                <line x1="473" y1="583" x2="515" y2="583" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                <line x1="473" y1="637" x2="515" y2="637" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                <g>
                    <path d="M484,594h11.5a1.5,1.5,0,0,0,1.5-1.5V588" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <line x1="492" y1="590" x2="492" y2="594" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
                <g>
                    <polyline points="484 640 497 640 497 693" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <line x1="492" y1="640" x2="492" y2="643" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <line x1="492" y1="686" x2="497" y2="686" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <line x1="494" y1="691" x2="497" y2="691" fill="none" stroke="#d1a3ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
                <g>
                    <polygon points="510 710 479 710 475 720 514 720 510 710" fill="#7321b1"/>
                    <polygon points="477 715 475 720 514 720 512 715 477 715" fill="#a80089"/>
                </g>
                <g>
                    <path d="M473.75,709.25V455.62a41.1,41.1,0,0,1,16.11-32.52,6.82,6.82,0,0,1,8.28,0" fill="none" stroke="#9d3dee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <path d="M498.14,423.1a41.1,41.1,0,0,1,16.11,32.52V709.25" fill="none" stroke="#e4afff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
                <g>
                    <g>
                        <path d="M484,710H473V672h2.24a6.23,6.23,0,0,1,6.21,5.74Z" fill="#ba4ae8"/>
                        <polygon points="473 672 473 710 478 710 475 672 473 672" fill="#b33ae6"/>
                    </g>
                    <g>
                        <path d="M504,710h11V672h-2.24a6.23,6.23,0,0,0-6.21,5.74Z" fill="#ba4ae8"/>
                        <path d="M514,680.59,511.5,710H515V677A9.37,9.37,0,0,0,514,680.59Z" fill="#b33ae6"/>
                    </g>
                </g>
                <rect x="509" y="611" width="16" height="8" rx="4" fill="#c497ff" stroke="#e4afff" strokeMiterlimit="10" strokeWidth="1.5"/>
                <rect x="509" y="674" width="16" height="8" rx="4" fill="#c497ff" stroke="#e4afff" strokeMiterlimit="10" strokeWidth="1.5"/>
                <g>
                    <path d="M481.76,480.61a.51.51,0,0,1-.52-.52v-7.55a.5.5,0,0,1,.15-.38.53.53,0,0,1,.37-.14.51.51,0,0,1,.37.14.5.5,0,0,1,.14.38v7.55a.49.49,0,0,1-.14.37A.48.48,0,0,1,481.76,480.61Z" fill="#b86bf4"/>
                    <path d="M487.17,480.72a3.91,3.91,0,0,1-1.33-.22,3.34,3.34,0,0,1-1.08-.6,2.2,2.2,0,0,1-.68-.9.35.35,0,0,1,0-.38.49.49,0,0,1,.35-.23.51.51,0,0,1,.36.05.57.57,0,0,1,.27.28,1.47,1.47,0,0,0,.45.53,2.25,2.25,0,0,0,.74.38,3.12,3.12,0,0,0,.93.14,2.78,2.78,0,0,0,1-.17,1.75,1.75,0,0,0,.72-.51,1.28,1.28,0,0,0,.27-.82,1.51,1.51,0,0,0-.47-1.09,2.51,2.51,0,0,0-1.52-.6,3.65,3.65,0,0,1-2.09-.8,2.06,2.06,0,0,1-.76-1.63,1.93,1.93,0,0,1,.38-1.2,2.42,2.42,0,0,1,1.06-.77,4.25,4.25,0,0,1,1.52-.26,3.17,3.17,0,0,1,1.14.19,2.7,2.7,0,0,1,.87.51,3.47,3.47,0,0,1,.63.74.6.6,0,0,1,.1.41.39.39,0,0,1-.2.3.5.5,0,0,1-.41.05.57.57,0,0,1-.33-.25,1.92,1.92,0,0,0-.42-.52,1.61,1.61,0,0,0-.6-.35,2.24,2.24,0,0,0-.82-.13,2.42,2.42,0,0,0-1.37.32,1.11,1.11,0,0,0-.54,1,1.25,1.25,0,0,0,.18.65,1.52,1.52,0,0,0,.64.53,3.89,3.89,0,0,0,1.28.32,3.54,3.54,0,0,1,2,.81,2.24,2.24,0,0,1,.7,1.72,2.32,2.32,0,0,1-.24,1.08,2.13,2.13,0,0,1-.65.78,3.3,3.3,0,0,1-1,.47A4,4,0,0,1,487.17,480.72Z" fill="#b86bf4"/>
                    <path d="M492.45,480.61a.51.51,0,0,1-.52-.52v-7.55a.5.5,0,0,1,.15-.38.53.53,0,0,1,.37-.14h2a3,3,0,0,1,1.45.34,2.56,2.56,0,0,1,1,.94,2.7,2.7,0,0,1,.36,1.4,2.48,2.48,0,0,1-.36,1.33,2.51,2.51,0,0,1-1,.92,3.1,3.1,0,0,1-1.45.33H493v2.81a.5.5,0,0,1-.15.37A.48.48,0,0,1,492.45,480.61Zm.52-4.3h1.49a2,2,0,0,0,.93-.21,1.53,1.53,0,0,0,.86-1.4,1.72,1.72,0,0,0-.23-.9,1.52,1.52,0,0,0-.63-.6,2,2,0,0,0-.93-.21H493Zm4,4.3a.51.51,0,0,1-.25-.06.71.71,0,0,1-.2-.19l-2-3.26,1-.29,1.87,3a.5.5,0,0,1,.06.54A.48.48,0,0,1,497,480.61Z" fill="#b86bf4"/>
                    <path d="M502.8,480.72a4.58,4.58,0,0,1-1.77-.33,3.87,3.87,0,0,1-1.38-.91,4.11,4.11,0,0,1-.9-1.4,4.65,4.65,0,0,1-.33-1.77,4.56,4.56,0,0,1,.33-1.76,4.11,4.11,0,0,1,.9-1.4,4,4,0,0,1,1.38-.92,5,5,0,0,1,3.53,0,4,4,0,0,1,2.29,2.32,4.56,4.56,0,0,1,.33,1.76,4.65,4.65,0,0,1-.33,1.77,4.26,4.26,0,0,1-.9,1.4,4.09,4.09,0,0,1-1.39.91A4.6,4.6,0,0,1,502.8,480.72Zm0-1a3.32,3.32,0,0,0,1.35-.26,3.2,3.2,0,0,0,1.78-1.83,3.88,3.88,0,0,0,0-2.74,3.62,3.62,0,0,0-.7-1.1,3.53,3.53,0,0,0-3.78-.73,3.33,3.33,0,0,0-1.07.73,3.44,3.44,0,0,0-.7,1.1,3.74,3.74,0,0,0,0,2.74,3.27,3.27,0,0,0,3.12,2.09Z" fill="#b86bf4"/>
                </g>
            </g>

            {/* s-launch-side2 */}
            <g id="s-launch-side2">
                <g>
                    <rect x="523" y="715" width="20" height="119" rx="10" fill="none"/>
                    <rect id="s-launch-side2FlameBg" x="523" y="715" width="20" height="109" rx="10" fill="#ff6d00"/>
                    <rect x="527" y="720" width="12" height="32" rx="6" fill="#fed50f"/>
                    <g id="s-launch-side2Flame">
                        <rect x="528" y="721" width="10" height="18" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                        <rect x="528" y="739" width="10" height="12" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                        <rect x="528" y="751" width="10" height="18" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                        <rect x="528" y="769" width="10" height="12" rx="5" fill="#fff" stroke="#fed50f" strokeMiterlimit="10" strokeWidth="2"/>
                    </g>
                    <rect x="529" y="722" width="8" height="28" rx="4" fill="#fff"/>
                    <rect x="523" y="760" width="20" height="54" fill="url(#linear-gradient-4)"/>
                </g>
                <g>
                    <polygon points="544 710 524 710 520 720 548 720 544 710" fill="#7321b1"/>
                    <polygon points="522 715 520 720 548 720 546 715 522 715" fill="#a80089"/>
                </g>
                <rect x="521" y="683" width="26" height="27" fill="#b33ae6"/>
                <rect x="538" y="684.5" width="8" height="24.5" fill="#c159ea"/>
                <path d="M547,683H521V583a23.79,23.79,0,0,1,8.43-18.17h0a7.08,7.08,0,0,1,9.14,0h0A23.79,23.79,0,0,1,547,583Z" fill="#fff"/>
                <path d="M529.43,564.87h0a7.08,7.08,0,0,1,9.14,0h0A23.79,23.79,0,0,1,547,583V683H528" fill="none" stroke="#d6cbff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                <line x1="522" y1="585" x2="549" y2="585" fill="none" stroke="#d6cbff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                <line x1="522" y1="673" x2="549" y2="673" fill="none" stroke="#d6cbff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                <line x1="522" y1="608" x2="533" y2="608" fill="none" stroke="#d9b5ff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                <rect x="521.5" y="636" width="26.5" height="8" fill="none" stroke="#d9b5ff" strokeLinejoin="round" strokeWidth="2"/>
                <rect x="525" y="614" width="15" height="19" rx="5" fill="#d9b5ff"/>
                <rect x="525" y="648" width="15" height="19" rx="5" fill="#d9b5ff"/>
                <path d="M528,683l-7,0V583a23.79,23.79,0,0,1,8.43-18.17" fill="none" stroke="#af75ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
            </g>
        </g>
    );
}
