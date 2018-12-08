import React from 'react';
import MenuHeader from '../MenuHeader/MenuHeader';
import './Header.css';

const header = () => {
    return (
        <div>
            <div className="SocialNetworksWrapper">
                <div className="Logo">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <svg id="logo" width="140" height="50" viewBox="0 0 140 50">
                            <g>
                                <path d="M713.726,49.736 C704.488,49.736 697.000,42.184 697.000,32.868 C697.000,23.552 704.488,16.000 713.726,16.000 C722.962,16.000 730.451,23.552 730.451,32.868 C730.451,42.184 722.962,49.736 713.726,49.736 ZM713.726,20.217 C706.798,20.217 701.181,25.881 701.181,32.868 C701.181,39.855 706.798,45.519 713.726,45.519 C720.653,45.519 726.270,39.855 726.270,32.868 C726.270,25.881 720.653,20.217 713.726,20.217 ZM718.866,30.646 C718.871,30.762 718.873,30.879 718.873,30.997 C718.873,34.577 716.171,38.707 711.228,38.707 C709.711,38.707 708.299,38.258 707.109,37.489 C707.320,37.514 707.533,37.527 707.750,37.527 C709.009,37.527 710.168,37.094 711.087,36.367 C709.912,36.345 708.919,35.562 708.577,34.485 C708.742,34.517 708.910,34.534 709.083,34.534 C709.328,34.534 709.565,34.501 709.791,34.438 C708.562,34.189 707.636,33.094 707.636,31.781 C707.636,31.770 707.636,31.759 707.636,31.747 C707.998,31.950 708.412,32.072 708.853,32.086 C708.132,31.600 707.657,30.771 707.657,29.831 C707.657,29.334 707.790,28.868 708.021,28.468 C709.347,30.108 711.326,31.187 713.559,31.299 C713.514,31.101 713.490,30.894 713.490,30.682 C713.490,29.186 714.693,27.972 716.177,27.972 C716.950,27.972 717.648,28.302 718.138,28.828 C718.750,28.707 719.325,28.481 719.844,28.171 C719.644,28.803 719.218,29.334 718.663,29.670 C719.207,29.604 719.725,29.459 720.206,29.243 C719.846,29.786 719.391,30.264 718.866,30.646 Z" class="cls-1"/>
                                <image xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAyCAMAAACwNWNzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAYFBMVEUAAABzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N/f3+goKC8vLyVlZX////39/fX19ezs7Pv7++Kiorn5+epqanFxcXf39/Ozs4AAACVHAyDAAAAD3RSTlMAM0Qiu92ZVcxmiHfuEaqwUwb6AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAndJREFUWMPtl+uaoyAMhiWIioCpPWzbnXbu/zInATxsx6Iz02732cf8kRCUt+EL0Ay/bNlzbAVZQVaQFWQFWUH+Lsimbbfe2t1LQdr9YIdfx38DhOzUvhLk7Fu77W9GOb4QZHBO5L3NgwgAOXgyMRdg/h0Q3FBSDps0CMROVYD3S6weD4Lnw35/mQNRGkDXCrFmX6N6AghuKSVzIPHbxgYS4Z4BsiG/XQbCi5TSx89A8LrfbxeCZAWnRBrNbWnyxjh+QiZMU+jx4NI0jZG+EfqdobFpkMuESO6B+GbwNWKlULNralQ5uaIfXKPNK+RoiTbrhZUGIZFcl4Jk/FnvO2tpXinZtZbKyTW+mMJgAb5pKWEeNssaNI8FwT/SEoVT+uQrfo4HF8xgsOEgonsOCH3ZdOFYzYYF1A8W2uQ8RHoE7XFmNbJYrILT32tEsVaH8DhTVOlspluUxmftcVVjsOh9IH0qOQ1SYF46Gs0gvBG7kLUkCO8ju6UgsUyiLytOeO/qnhLCIRBA6CWhw06YBDnSVQAXghj/wwbfBcnYkTZ9MBLU4UFeEzbCFMjmNLEy0yCuQIQbEF/NnImuWiMI9wgbQCRW8Y0UyPuS01cBgCks2rIHK5UBXfFMBECKgDpUsQ9KOpTA2CoWVoNhL0mBEMdEQiavATbXLhuBcJcJLtAuihUM6SstByGkqt9d74O0fEV7xxmQ23tRty6xL0wNNyeyGL1Qd1vOJ5CW7e3ib4oXnAdJWvK89UxePJMgg10n784PBek0ex/kcN2eEZ8NUsSi+gRCt0O/Mi0m7CsgIq9T4arPx4v/co5l/lKQsa0gK8gKsoL8LyAfx7isV9f0lvYAAAAASUVORK5CYII=" width="136" height="50"/>
                            </g>
                        </svg>
                    </a>
                </div>
                <div className="SocialNetworks">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg id="facebook" width="39" height="39" viewBox="0 0 39 39">
                            <path fill="#dadada" d="M19.726,35.736 C10.488,35.736 3.000,28.184 3.000,18.868 C3.000,9.552 10.488,2.000 19.726,2.000 C28.962,2.000 36.451,9.552 36.451,18.868 C36.451,28.184 28.962,35.736 19.726,35.736 ZM19.726,6.217 C12.798,6.217 7.181,11.881 7.181,18.868 C7.181,25.855 12.798,31.519 19.726,31.519 C26.653,31.519 32.270,25.855 32.270,18.868 C32.270,11.881 26.653,6.217 19.726,6.217 ZM24.866,16.646 C24.871,16.762 24.873,16.879 24.873,16.997 C24.873,20.577 22.171,24.707 17.228,24.707 C15.711,24.707 14.299,24.258 13.109,23.489 C13.320,23.514 13.533,23.527 13.750,23.527 C15.009,23.527 16.168,23.094 17.087,22.367 C15.912,22.345 14.919,21.562 14.577,20.485 C14.742,20.517 14.910,20.534 15.083,20.534 C15.328,20.534 15.565,20.501 15.791,20.438 C14.562,20.189 13.636,19.094 13.636,17.781 C13.636,17.770 13.636,17.759 13.636,17.747 C13.998,17.950 14.412,18.072 14.853,18.086 C14.132,17.600 13.657,16.771 13.657,15.831 C13.657,15.334 13.790,14.868 14.021,14.468 C15.347,16.108 17.326,17.187 19.559,17.299 C19.514,17.101 19.490,16.894 19.490,16.682 C19.490,15.186 20.693,13.972 22.177,13.972 C22.950,13.972 23.648,14.302 24.138,14.828 C24.750,14.707 25.325,14.481 25.844,14.171 C25.644,14.803 25.218,15.334 24.663,15.670 C25.207,15.604 25.725,15.459 26.206,15.243 C25.846,15.786 25.391,16.264 24.866,16.646 Z" class="cls-1"/>
                        </svg>
                    </a>
                
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <svg id="twitter" width="39" height="39" viewBox="0 0 39 39">
                            <g fill="#dadada">
                                <path d="M19.540,35.736 C10.302,35.736 2.814,28.184 2.814,18.868 C2.814,9.552 10.302,2.000 19.540,2.000 C28.777,2.000 36.266,9.552 36.266,18.868 C36.266,28.184 28.777,35.736 19.540,35.736 ZM19.540,6.217 C12.612,6.217 6.995,11.881 6.995,18.868 C6.995,25.855 12.612,31.519 19.540,31.519 C26.467,31.519 32.084,25.855 32.084,18.868 C32.084,11.881 26.467,6.217 19.540,6.217 ZM20.023,15.526 L20.020,16.718 L22.119,16.718 L21.666,19.110 L20.083,19.110 L20.091,25.466 L17.444,25.474 L17.436,19.127 L15.869,19.110 L15.869,16.710 L17.453,16.701 L17.501,15.391 C17.501,13.589 18.118,12.460 20.223,12.460 L22.157,12.468 L22.166,14.597 L21.142,14.671 C20.322,14.671 20.023,14.951 20.023,15.526 Z" class="cls-1"/>
                                <path d="M-22.274,35.736 C-31.512,35.736 -39.000,28.184 -39.000,18.868 C-39.000,9.552 -31.512,2.000 -22.274,2.000 C-13.038,2.000 -5.549,9.552 -5.549,18.868 C-5.549,28.184 -13.038,35.736 -22.274,35.736 ZM-22.274,6.217 C-29.202,6.217 -34.819,11.881 -34.819,18.868 C-34.819,25.855 -29.202,31.519 -22.274,31.519 C-15.347,31.519 -9.730,25.855 -9.730,18.868 C-9.730,11.881 -15.347,6.217 -22.274,6.217 ZM-17.134,16.646 C-17.129,16.762 -17.127,16.879 -17.127,16.997 C-17.127,20.577 -19.829,24.707 -24.772,24.707 C-26.289,24.707 -27.701,24.258 -28.891,23.489 C-28.680,23.514 -28.467,23.527 -28.250,23.527 C-26.991,23.527 -25.832,23.094 -24.913,22.367 C-26.088,22.345 -27.081,21.562 -27.423,20.485 C-27.258,20.517 -27.090,20.534 -26.917,20.534 C-26.672,20.534 -26.435,20.501 -26.209,20.438 C-27.438,20.189 -28.364,19.094 -28.364,17.781 C-28.364,17.770 -28.364,17.759 -28.364,17.747 C-28.002,17.950 -27.588,18.072 -27.147,18.086 C-27.868,17.600 -28.343,16.771 -28.343,15.831 C-28.343,15.334 -28.210,14.868 -27.979,14.468 C-26.653,16.108 -24.674,17.187 -22.441,17.299 C-22.486,17.101 -22.510,16.894 -22.510,16.682 C-22.510,15.186 -21.307,13.972 -19.823,13.972 C-19.050,13.972 -18.352,14.302 -17.862,14.828 C-17.250,14.707 -16.675,14.481 -16.156,14.171 C-16.356,14.803 -16.782,15.334 -17.337,15.670 C-16.793,15.604 -16.275,15.459 -15.794,15.243 C-16.154,15.786 -16.609,16.264 -17.134,16.646 Z" class="cls-1"/>
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.rss.com" target="_blank" rel="noopener noreferrer">
                        <svg id="rss" width="39" height="39" viewBox="0 0 39 39">
                            <g fill="#dadada">
                                <path d="M19.832,36.000 C10.594,36.000 3.106,28.447 3.106,19.132 C3.106,9.815 10.594,2.264 19.832,2.264 C29.068,2.264 36.557,9.815 36.557,19.132 C36.557,28.447 29.068,36.000 19.832,36.000 ZM19.832,6.481 C12.904,6.481 7.287,12.144 7.287,19.132 C7.287,26.118 12.904,31.783 19.832,31.783 C26.759,31.783 32.376,26.118 32.376,19.132 C32.376,12.144 26.759,6.481 19.832,6.481 ZM15.545,15.489 L15.545,13.509 C21.174,13.509 25.737,18.113 25.737,23.788 L23.773,23.788 C23.773,19.212 20.084,15.489 15.545,15.489 ZM22.169,23.788 L20.205,23.788 C20.205,21.196 18.114,19.087 15.545,19.087 L15.545,17.107 C19.205,17.107 22.169,20.100 22.169,23.788 ZM16.746,21.365 C17.410,21.365 17.948,21.907 17.948,22.576 C17.948,23.246 17.410,23.788 16.746,23.788 C16.083,23.788 15.545,23.246 15.545,22.576 C15.545,21.907 16.083,21.365 16.746,21.365 Z" class="cls-1"/>
                                <path d="M-21.460,35.736 C-30.698,35.736 -38.186,28.184 -38.186,18.868 C-38.186,9.552 -30.698,2.000 -21.460,2.000 C-12.223,2.000 -4.734,9.552 -4.734,18.868 C-4.734,28.184 -12.223,35.736 -21.460,35.736 ZM-21.460,6.217 C-28.388,6.217 -34.005,11.881 -34.005,18.868 C-34.005,25.855 -28.388,31.519 -21.460,31.519 C-14.533,31.519 -8.916,25.855 -8.916,18.868 C-8.916,11.881 -14.533,6.217 -21.460,6.217 ZM-20.977,15.526 L-20.980,16.718 L-18.881,16.718 L-19.334,19.110 L-20.917,19.110 L-20.909,25.466 L-23.556,25.474 L-23.564,19.127 L-25.131,19.110 L-25.131,16.710 L-23.547,16.701 L-23.499,15.391 C-23.499,13.589 -22.882,12.460 -20.777,12.460 L-18.843,12.468 L-18.834,14.597 L-19.858,14.671 C-20.678,14.671 -20.977,14.951 -20.977,15.526 Z" class="cls-1"/>
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <svg id="pinterest" width="39" height="39" viewBox="0 0 39 39">
                            <g fill="#dadada">
                                <path d="M19.646,36.000 C10.408,36.000 2.920,28.447 2.920,19.132 C2.920,9.815 10.408,2.264 19.646,2.264 C28.882,2.264 36.372,9.815 36.372,19.132 C36.372,28.447 28.882,36.000 19.646,36.000 ZM19.646,6.481 C12.718,6.481 7.101,12.144 7.101,19.132 C7.101,26.118 12.718,31.783 19.646,31.783 C26.573,31.783 32.190,26.118 32.190,19.132 C32.190,12.144 26.573,6.481 19.646,6.481 ZM20.730,22.721 C19.858,22.721 19.039,22.246 18.758,21.707 C18.758,21.707 18.289,23.582 18.191,23.944 C17.841,25.223 16.813,26.503 16.734,26.609 C16.677,26.682 16.554,26.659 16.541,26.562 C16.519,26.399 16.257,24.785 16.566,23.468 C16.721,22.807 17.604,19.032 17.604,19.032 C17.604,19.032 17.346,18.513 17.346,17.744 C17.346,16.538 18.040,15.637 18.903,15.637 C19.637,15.637 19.992,16.193 19.992,16.859 C19.992,17.604 19.521,18.716 19.279,19.747 C19.076,20.612 19.709,21.316 20.553,21.316 C22.082,21.316 23.112,19.335 23.112,16.988 C23.112,15.203 21.921,13.868 19.754,13.868 C17.306,13.868 15.779,15.710 15.779,17.767 C15.779,18.476 15.987,18.977 16.312,19.363 C16.461,19.541 16.482,19.613 16.428,19.817 C16.389,19.967 16.301,20.327 16.263,20.470 C16.209,20.677 16.044,20.750 15.859,20.674 C14.732,20.210 14.206,18.964 14.206,17.564 C14.206,15.252 16.140,12.479 19.975,12.479 C23.057,12.479 25.085,14.727 25.085,17.142 C25.085,20.336 23.325,22.721 20.730,22.721 Z" class="cls-1"/>
                                <path d="M-22.168,36.000 C-31.406,36.000 -38.894,28.447 -38.894,19.132 C-38.894,9.815 -31.406,2.264 -22.168,2.264 C-12.932,2.264 -5.443,9.815 -5.443,19.132 C-5.443,28.447 -12.932,36.000 -22.168,36.000 ZM-22.168,6.481 C-29.096,6.481 -34.713,12.144 -34.713,19.132 C-34.713,26.118 -29.096,31.783 -22.168,31.783 C-15.241,31.783 -9.624,26.118 -9.624,19.132 C-9.624,12.144 -15.241,6.481 -22.168,6.481 ZM-26.455,15.489 L-26.455,13.509 C-20.826,13.509 -16.263,18.113 -16.263,23.788 L-18.227,23.788 C-18.227,19.212 -21.916,15.489 -26.455,15.489 ZM-19.831,23.788 L-21.795,23.788 C-21.795,21.196 -23.886,19.087 -26.455,19.087 L-26.455,17.107 C-22.795,17.107 -19.831,20.100 -19.831,23.788 ZM-25.254,21.365 C-24.590,21.365 -24.052,21.907 -24.052,22.576 C-24.052,23.246 -24.590,23.788 -25.254,23.788 C-25.917,23.788 -26.455,23.246 -26.455,22.576 C-26.455,21.907 -25.917,21.365 -25.254,21.365 Z" class="cls-1"/>
                                <path d="M-63.460,35.736 C-72.698,35.736 -80.186,28.184 -80.186,18.868 C-80.186,9.552 -72.698,2.000 -63.460,2.000 C-54.223,2.000 -46.734,9.552 -46.734,18.868 C-46.734,28.184 -54.223,35.736 -63.460,35.736 ZM-63.460,6.217 C-70.388,6.217 -76.005,11.881 -76.005,18.868 C-76.005,25.855 -70.388,31.519 -63.460,31.519 C-56.533,31.519 -50.916,25.855 -50.916,18.868 C-50.916,11.881 -56.533,6.217 -63.460,6.217 ZM-62.977,15.526 L-62.980,16.718 L-60.881,16.718 L-61.334,19.110 L-62.917,19.110 L-62.909,25.466 L-65.556,25.474 L-65.564,19.127 L-67.131,19.110 L-67.131,16.710 L-65.547,16.701 L-65.499,15.391 C-65.499,13.589 -64.882,12.460 -62.777,12.460 L-60.843,12.468 L-60.834,14.597 L-61.858,14.671 C-62.678,14.671 -62.977,14.951 -62.977,15.526 Z" class="cls-1"/>
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.googleplus.com" target="_blank" rel="noopener noreferrer">
                        <svg id="googleplus" width="39" height="39" viewBox="0 0 39 39">
                            <g fill="#dadada">
                                <path d="M61.274,36.000 C52.037,36.000 44.549,28.447 44.549,19.132 C44.549,9.815 52.037,2.264 61.274,2.264 C70.511,2.264 78.000,9.815 78.000,19.132 C78.000,28.447 70.511,36.000 61.274,36.000 ZM61.274,6.481 C54.346,6.481 48.730,12.144 48.730,19.132 C48.730,26.118 54.346,31.783 61.274,31.783 C68.202,31.783 73.819,26.118 73.819,19.132 C73.819,12.144 68.202,6.481 61.274,6.481 ZM68.043,22.015 C67.858,22.455 67.630,22.878 67.366,23.275 C67.102,23.666 66.800,24.035 66.469,24.371 C66.137,24.705 65.771,25.009 65.383,25.274 C64.989,25.542 64.569,25.772 64.134,25.958 C63.689,26.147 63.226,26.292 62.754,26.389 C62.269,26.490 61.772,26.540 61.274,26.540 C60.776,26.540 60.279,26.490 59.795,26.389 C59.322,26.292 58.858,26.147 58.414,25.958 C57.979,25.772 57.559,25.542 57.165,25.274 C56.777,25.009 56.412,24.705 56.079,24.371 C55.748,24.035 55.446,23.666 55.183,23.275 C54.918,22.878 54.690,22.455 54.506,22.015 C54.318,21.568 54.174,21.100 54.078,20.624 C53.978,20.135 53.928,19.633 53.928,19.132 C53.928,18.629 53.978,18.128 54.078,17.639 C54.174,17.163 54.318,16.695 54.506,16.247 C54.690,15.808 54.918,15.384 55.183,14.988 C55.446,14.596 55.748,14.228 56.079,13.893 C56.412,13.558 56.777,13.254 57.165,12.988 C57.559,12.720 57.979,12.491 58.414,12.305 C58.858,12.116 59.322,11.971 59.795,11.873 C60.279,11.773 60.776,11.723 61.274,11.723 C61.772,11.723 62.269,11.773 62.754,11.873 C63.226,11.971 63.689,12.116 64.134,12.305 C64.569,12.491 64.989,12.720 65.383,12.988 C65.771,13.254 66.137,13.558 66.469,13.893 C66.800,14.228 67.102,14.596 67.366,14.988 C67.630,15.384 67.858,15.808 68.043,16.247 C68.230,16.695 68.374,17.163 68.471,17.639 C68.571,18.128 68.620,18.629 68.620,19.132 C68.620,19.633 68.571,20.135 68.471,20.624 C68.374,21.100 68.230,21.568 68.043,22.015 ZM64.756,24.242 C65.064,24.027 65.357,23.784 65.622,23.516 C65.901,23.235 66.153,22.927 66.373,22.599 C66.595,22.267 66.786,21.913 66.940,21.545 C67.098,21.171 67.218,20.780 67.299,20.381 C67.317,20.287 67.326,20.191 67.341,20.097 C67.290,20.082 67.221,20.063 67.143,20.043 C67.131,20.040 67.119,20.036 67.106,20.033 C66.929,19.989 66.695,19.937 66.413,19.890 C66.412,19.890 66.411,19.889 66.409,19.889 C65.686,19.769 64.662,19.685 63.557,19.864 C64.305,21.942 64.653,23.669 64.756,24.242 ZM57.836,24.274 C58.166,24.497 58.516,24.690 58.880,24.845 C59.252,25.004 59.640,25.125 60.034,25.207 C60.440,25.290 60.856,25.333 61.274,25.333 C61.692,25.333 62.109,25.290 62.513,25.207 C62.908,25.125 63.297,25.004 63.667,24.845 C63.679,24.841 63.690,24.834 63.702,24.829 C63.580,24.146 63.206,22.313 62.382,20.154 C62.369,20.159 62.356,20.162 62.342,20.167 C61.968,20.298 61.625,20.446 61.300,20.601 C61.254,20.623 61.205,20.644 61.160,20.667 C60.858,20.816 60.580,20.973 60.321,21.135 C60.272,21.165 60.224,21.195 60.177,21.226 C59.926,21.389 59.692,21.554 59.481,21.721 C59.447,21.747 59.417,21.773 59.384,21.800 C59.170,21.973 58.969,22.147 58.794,22.317 C58.794,22.318 58.794,22.318 58.794,22.318 C58.615,22.491 58.461,22.658 58.320,22.820 C58.300,22.842 58.279,22.865 58.260,22.888 C58.132,23.038 58.021,23.179 57.924,23.310 C57.906,23.335 57.888,23.359 57.871,23.383 C57.782,23.507 57.704,23.623 57.643,23.720 C57.633,23.737 57.624,23.751 57.615,23.767 C57.557,23.861 57.508,23.945 57.477,24.003 C57.595,24.096 57.713,24.190 57.836,24.274 ZM55.135,18.932 C55.133,18.999 55.125,19.065 55.125,19.132 C55.125,19.553 55.168,19.973 55.250,20.381 C55.331,20.780 55.451,21.171 55.609,21.545 C55.763,21.913 55.954,22.267 56.175,22.599 C56.326,22.822 56.509,23.020 56.686,23.223 C56.728,23.156 56.791,23.060 56.864,22.953 C56.877,22.933 56.886,22.919 56.900,22.899 C56.978,22.787 57.072,22.658 57.180,22.517 C57.201,22.490 57.221,22.464 57.243,22.435 C57.359,22.288 57.487,22.131 57.634,21.963 C57.656,21.938 57.679,21.913 57.702,21.888 C57.861,21.710 58.033,21.526 58.228,21.337 C58.417,21.153 58.628,20.967 58.851,20.783 C58.886,20.755 58.917,20.727 58.952,20.699 C59.170,20.523 59.406,20.352 59.655,20.187 C59.702,20.156 59.749,20.125 59.797,20.095 C60.054,19.931 60.324,19.776 60.610,19.633 C60.653,19.612 60.698,19.593 60.742,19.572 C61.049,19.427 61.368,19.291 61.709,19.180 C61.789,19.154 61.870,19.134 61.951,19.111 C61.792,18.749 61.625,18.385 61.444,18.028 C58.906,18.793 56.456,18.916 55.467,18.930 L55.467,18.930 C55.326,18.932 55.212,18.933 55.135,18.932 ZM58.676,13.517 C58.385,13.654 58.101,13.808 57.836,13.989 C57.511,14.211 57.205,14.465 56.927,14.746 C56.647,15.026 56.396,15.335 56.175,15.664 C55.954,15.996 55.763,16.350 55.609,16.717 C55.458,17.075 55.344,17.448 55.264,17.827 C55.329,17.827 55.419,17.827 55.530,17.824 C55.532,17.824 55.536,17.824 55.538,17.824 C55.763,17.819 56.076,17.808 56.457,17.783 C56.458,17.783 56.459,17.783 56.460,17.783 C57.419,17.719 58.810,17.565 60.348,17.200 C60.348,17.200 60.348,17.200 60.349,17.199 C60.539,17.155 60.732,17.106 60.926,17.054 C59.968,15.336 58.958,13.908 58.676,13.517 ZM64.712,13.989 C64.384,13.766 64.032,13.573 63.667,13.417 C63.296,13.259 62.908,13.138 62.513,13.056 C62.109,12.972 61.692,12.930 61.274,12.930 C60.856,12.930 60.440,12.972 60.034,13.056 C59.982,13.066 59.931,13.084 59.880,13.096 C60.181,13.506 61.197,14.928 62.135,16.665 C62.380,16.572 62.610,16.473 62.824,16.373 C62.828,16.371 62.832,16.369 62.836,16.367 C64.342,15.655 65.095,14.801 65.328,14.501 C65.128,14.324 64.932,14.139 64.712,13.989 ZM67.299,17.881 C67.218,17.483 67.098,17.093 66.940,16.717 C66.786,16.350 66.595,15.996 66.373,15.664 C66.271,15.511 66.140,15.380 66.024,15.237 C65.772,15.555 64.942,16.463 63.373,17.261 C63.357,17.269 63.340,17.277 63.323,17.285 C63.102,17.396 62.870,17.503 62.619,17.607 C62.767,17.912 62.910,18.221 63.042,18.534 C63.089,18.645 63.128,18.752 63.173,18.862 C63.396,18.834 63.618,18.814 63.838,18.801 C63.876,18.798 63.912,18.797 63.949,18.795 C64.138,18.785 64.322,18.779 64.505,18.777 C64.536,18.777 64.567,18.776 64.598,18.776 C64.807,18.776 65.011,18.780 65.207,18.788 C65.222,18.789 65.236,18.790 65.250,18.790 C65.428,18.798 65.598,18.809 65.763,18.823 C65.802,18.825 65.840,18.828 65.879,18.832 C66.039,18.846 66.192,18.861 66.334,18.877 C66.343,18.878 66.354,18.879 66.363,18.880 C66.516,18.898 66.653,18.917 66.782,18.935 C66.814,18.940 66.842,18.944 66.873,18.949 C66.969,18.964 67.055,18.977 67.132,18.991 C67.154,18.994 67.176,18.998 67.196,19.001 C67.287,19.017 67.362,19.031 67.419,19.043 C67.413,18.652 67.375,18.262 67.299,17.881 Z" class="cls-1"/>
                                <path d="M19.460,36.000 C10.222,36.000 2.734,28.447 2.734,19.132 C2.734,9.815 10.222,2.264 19.460,2.264 C28.697,2.264 36.186,9.815 36.186,19.132 C36.186,28.447 28.697,36.000 19.460,36.000 ZM19.460,6.481 C12.532,6.481 6.916,12.144 6.916,19.132 C6.916,26.118 12.532,31.783 19.460,31.783 C26.388,31.783 32.004,26.118 32.004,19.132 C32.004,12.144 26.388,6.481 19.460,6.481 ZM24.689,19.170 L23.634,19.162 L23.648,17.012 L21.516,17.012 L21.516,15.946 L23.618,15.946 L23.618,13.841 L24.708,13.828 L24.721,15.998 L26.775,15.998 L26.775,17.014 L24.689,17.014 L24.689,19.170 ZM18.899,14.449 C19.683,14.753 20.100,15.674 20.100,16.619 C20.100,17.412 19.663,18.095 19.048,18.581 C18.447,19.054 18.333,19.252 18.333,19.655 C18.333,19.999 18.976,20.583 19.314,20.823 C20.298,21.525 20.616,22.177 20.616,23.265 C20.616,24.622 19.314,25.971 16.955,25.971 C14.887,25.971 13.142,25.123 13.142,23.765 C13.142,22.388 14.707,21.033 16.776,21.033 C17.001,21.033 17.234,21.053 17.448,21.053 C17.165,20.775 16.976,20.486 16.976,20.067 C16.976,19.818 17.020,19.526 17.131,19.314 C17.018,19.322 16.903,19.324 16.784,19.324 C15.086,19.324 13.948,18.105 13.948,16.595 C13.948,15.117 15.519,13.841 17.189,13.841 C18.120,13.841 20.914,13.841 20.914,13.841 L20.080,14.449 L18.899,14.449 ZM17.196,21.409 C15.767,21.393 14.486,22.287 14.486,23.362 C14.486,24.458 15.518,25.371 16.948,25.371 C18.957,25.371 19.658,24.515 19.658,23.418 C19.658,23.286 19.642,23.157 19.613,23.031 C19.455,22.410 18.899,22.102 18.123,21.558 C17.840,21.466 17.530,21.412 17.196,21.409 ZM18.761,16.693 C18.595,15.422 17.683,14.402 16.724,14.373 C15.764,14.344 15.121,15.317 15.286,16.589 C15.452,17.859 16.364,18.912 17.324,18.941 C18.283,18.970 18.926,17.964 18.761,16.693 Z" class="cls-1"/>
                                <path d="M-22.354,36.000 C-31.592,36.000 -39.080,28.447 -39.080,19.132 C-39.080,9.815 -31.592,2.264 -22.354,2.264 C-13.118,2.264 -5.628,9.815 -5.628,19.132 C-5.628,28.447 -13.118,36.000 -22.354,36.000 ZM-22.354,6.481 C-29.282,6.481 -34.899,12.144 -34.899,19.132 C-34.899,26.118 -29.282,31.783 -22.354,31.783 C-15.427,31.783 -9.810,26.118 -9.810,19.132 C-9.810,12.144 -15.427,6.481 -22.354,6.481 ZM-21.270,22.721 C-22.142,22.721 -22.961,22.246 -23.242,21.707 C-23.242,21.707 -23.711,23.582 -23.809,23.944 C-24.159,25.223 -25.187,26.503 -25.266,26.609 C-25.323,26.682 -25.446,26.659 -25.459,26.562 C-25.481,26.399 -25.743,24.785 -25.434,23.468 C-25.279,22.807 -24.396,19.032 -24.396,19.032 C-24.396,19.032 -24.654,18.513 -24.654,17.744 C-24.654,16.538 -23.960,15.637 -23.097,15.637 C-22.363,15.637 -22.008,16.193 -22.008,16.859 C-22.008,17.604 -22.479,18.716 -22.721,19.747 C-22.924,20.612 -22.291,21.316 -21.447,21.316 C-19.918,21.316 -18.888,19.335 -18.888,16.988 C-18.888,15.203 -20.079,13.868 -22.246,13.868 C-24.694,13.868 -26.221,15.710 -26.221,17.767 C-26.221,18.476 -26.013,18.977 -25.688,19.363 C-25.539,19.541 -25.518,19.613 -25.572,19.817 C-25.611,19.967 -25.699,20.327 -25.737,20.470 C-25.791,20.677 -25.956,20.750 -26.141,20.674 C-27.268,20.210 -27.794,18.964 -27.794,17.564 C-27.794,15.252 -25.860,12.479 -22.025,12.479 C-18.943,12.479 -16.915,14.727 -16.915,17.142 C-16.915,20.336 -18.675,22.721 -21.270,22.721 Z" class="cls-1"/>
                                <path d="M-64.168,36.000 C-73.406,36.000 -80.894,28.447 -80.894,19.132 C-80.894,9.815 -73.406,2.264 -64.168,2.264 C-54.932,2.264 -47.443,9.815 -47.443,19.132 C-47.443,28.447 -54.932,36.000 -64.168,36.000 ZM-64.168,6.481 C-71.096,6.481 -76.713,12.144 -76.713,19.132 C-76.713,26.118 -71.096,31.783 -64.168,31.783 C-57.241,31.783 -51.624,26.118 -51.624,19.132 C-51.624,12.144 -57.241,6.481 -64.168,6.481 ZM-68.455,15.489 L-68.455,13.509 C-62.826,13.509 -58.263,18.113 -58.263,23.788 L-60.227,23.788 C-60.227,19.212 -63.916,15.489 -68.455,15.489 ZM-61.831,23.788 L-63.795,23.788 C-63.795,21.196 -65.886,19.087 -68.455,19.087 L-68.455,17.107 C-64.795,17.107 -61.831,20.100 -61.831,23.788 ZM-67.254,21.365 C-66.590,21.365 -66.052,21.907 -66.052,22.576 C-66.052,23.246 -66.590,23.788 -67.254,23.788 C-67.917,23.788 -68.455,23.246 -68.455,22.576 C-68.455,21.907 -67.917,21.365 -67.254,21.365 Z" class="cls-1"/>
                                <path d="M-105.460,35.736 C-114.698,35.736 -122.186,28.184 -122.186,18.868 C-122.186,9.552 -114.698,2.000 -105.460,2.000 C-96.223,2.000 -88.734,9.552 -88.734,18.868 C-88.734,28.184 -96.223,35.736 -105.460,35.736 ZM-105.460,6.217 C-112.388,6.217 -118.005,11.881 -118.005,18.868 C-118.005,25.855 -112.388,31.519 -105.460,31.519 C-98.533,31.519 -92.916,25.855 -92.916,18.868 C-92.916,11.881 -98.533,6.217 -105.460,6.217 ZM-104.977,15.526 L-104.980,16.718 L-102.881,16.718 L-103.334,19.110 L-104.917,19.110 L-104.909,25.466 L-107.556,25.474 L-107.564,19.127 L-109.131,19.110 L-109.131,16.710 L-107.547,16.701 L-107.499,15.391 C-107.499,13.589 -106.882,12.460 -104.777,12.460 L-102.843,12.468 L-102.834,14.597 L-103.858,14.671 C-104.678,14.671 -104.977,14.951 -104.977,15.526 Z" class="cls-1"/>
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
                        <svg id="dribbble" width="39" height="39" viewBox="0 0 39 39">
                            <g fill="#dadada">
                                <path d="M19.274,36.000 C10.037,36.000 2.549,28.447 2.549,19.132 C2.549,9.815 10.037,2.264 19.274,2.264 C28.511,2.264 36.000,9.815 36.000,19.132 C36.000,28.447 28.511,36.000 19.274,36.000 ZM19.274,6.481 C12.346,6.481 6.730,12.144 6.730,19.132 C6.730,26.118 12.346,31.783 19.274,31.783 C26.202,31.783 31.819,26.118 31.819,19.132 C31.819,12.144 26.202,6.481 19.274,6.481 ZM26.043,22.015 C25.858,22.455 25.630,22.878 25.366,23.275 C25.102,23.666 24.800,24.035 24.469,24.371 C24.137,24.705 23.771,25.009 23.383,25.274 C22.989,25.542 22.569,25.772 22.134,25.958 C21.689,26.147 21.226,26.292 20.754,26.389 C20.269,26.490 19.772,26.540 19.274,26.540 C18.776,26.540 18.279,26.490 17.795,26.389 C17.322,26.292 16.858,26.147 16.414,25.958 C15.979,25.772 15.559,25.542 15.165,25.274 C14.777,25.009 14.412,24.705 14.079,24.371 C13.748,24.035 13.446,23.666 13.183,23.275 C12.918,22.878 12.690,22.455 12.506,22.015 C12.318,21.568 12.174,21.100 12.078,20.624 C11.978,20.135 11.928,19.633 11.928,19.132 C11.928,18.629 11.978,18.128 12.078,17.639 C12.174,17.163 12.318,16.695 12.506,16.247 C12.690,15.808 12.918,15.384 13.183,14.988 C13.446,14.596 13.748,14.228 14.079,13.893 C14.412,13.558 14.777,13.254 15.165,12.988 C15.559,12.720 15.979,12.491 16.414,12.305 C16.858,12.116 17.322,11.971 17.795,11.873 C18.279,11.773 18.776,11.723 19.274,11.723 C19.772,11.723 20.269,11.773 20.754,11.873 C21.226,11.971 21.689,12.116 22.134,12.305 C22.569,12.491 22.989,12.720 23.383,12.988 C23.771,13.254 24.137,13.558 24.469,13.893 C24.800,14.228 25.102,14.596 25.366,14.988 C25.630,15.384 25.858,15.808 26.043,16.247 C26.230,16.695 26.374,17.163 26.471,17.639 C26.571,18.128 26.620,18.629 26.620,19.132 C26.620,19.633 26.571,20.135 26.471,20.624 C26.374,21.100 26.230,21.568 26.043,22.015 ZM22.756,24.242 C23.064,24.027 23.357,23.784 23.622,23.516 C23.901,23.235 24.153,22.927 24.373,22.599 C24.595,22.267 24.786,21.913 24.940,21.545 C25.098,21.171 25.218,20.780 25.299,20.381 C25.317,20.287 25.326,20.191 25.341,20.097 C25.290,20.082 25.221,20.063 25.143,20.043 C25.131,20.040 25.119,20.036 25.106,20.033 C24.929,19.989 24.695,19.937 24.413,19.890 C24.412,19.890 24.411,19.889 24.409,19.889 C23.686,19.769 22.662,19.685 21.557,19.864 C22.305,21.942 22.653,23.669 22.756,24.242 ZM15.836,24.274 C16.166,24.497 16.516,24.690 16.880,24.845 C17.252,25.004 17.640,25.125 18.034,25.207 C18.440,25.290 18.856,25.333 19.274,25.333 C19.692,25.333 20.109,25.290 20.513,25.207 C20.908,25.125 21.297,25.004 21.667,24.845 C21.679,24.841 21.690,24.834 21.702,24.829 C21.580,24.146 21.206,22.313 20.382,20.154 C20.369,20.159 20.356,20.162 20.342,20.167 C19.968,20.298 19.625,20.446 19.300,20.601 C19.254,20.623 19.205,20.644 19.160,20.667 C18.858,20.816 18.580,20.973 18.321,21.135 C18.272,21.165 18.224,21.195 18.177,21.226 C17.926,21.389 17.692,21.554 17.481,21.721 C17.447,21.747 17.417,21.773 17.384,21.800 C17.170,21.973 16.969,22.147 16.794,22.317 C16.794,22.318 16.794,22.318 16.794,22.318 C16.615,22.491 16.461,22.658 16.320,22.820 C16.300,22.842 16.279,22.865 16.260,22.888 C16.132,23.038 16.021,23.179 15.924,23.310 C15.906,23.335 15.888,23.359 15.871,23.383 C15.782,23.507 15.704,23.623 15.643,23.720 C15.633,23.737 15.624,23.751 15.615,23.767 C15.557,23.861 15.508,23.945 15.477,24.003 C15.595,24.096 15.713,24.190 15.836,24.274 ZM13.135,18.932 C13.133,18.999 13.125,19.065 13.125,19.132 C13.125,19.553 13.168,19.973 13.250,20.381 C13.331,20.780 13.451,21.171 13.609,21.545 C13.763,21.913 13.954,22.267 14.175,22.599 C14.326,22.822 14.509,23.020 14.686,23.223 C14.728,23.156 14.791,23.060 14.864,22.953 C14.877,22.933 14.886,22.919 14.900,22.899 C14.978,22.787 15.072,22.658 15.180,22.517 C15.201,22.490 15.221,22.464 15.243,22.435 C15.359,22.288 15.487,22.131 15.634,21.963 C15.656,21.938 15.679,21.913 15.702,21.888 C15.861,21.710 16.033,21.526 16.228,21.337 C16.417,21.153 16.628,20.967 16.851,20.783 C16.886,20.755 16.917,20.727 16.952,20.699 C17.170,20.523 17.406,20.352 17.655,20.187 C17.702,20.156 17.749,20.125 17.797,20.095 C18.054,19.931 18.324,19.776 18.610,19.633 C18.653,19.612 18.698,19.593 18.742,19.572 C19.049,19.427 19.368,19.291 19.709,19.180 C19.789,19.154 19.870,19.134 19.951,19.111 C19.792,18.749 19.625,18.385 19.444,18.028 C16.906,18.793 14.456,18.916 13.467,18.930 L13.467,18.930 C13.326,18.932 13.212,18.933 13.135,18.932 ZM16.676,13.517 C16.385,13.654 16.101,13.808 15.836,13.989 C15.511,14.211 15.205,14.465 14.927,14.746 C14.647,15.026 14.396,15.335 14.175,15.664 C13.954,15.996 13.763,16.350 13.609,16.717 C13.458,17.075 13.344,17.448 13.264,17.827 C13.329,17.827 13.419,17.827 13.530,17.824 C13.532,17.824 13.536,17.824 13.538,17.824 C13.763,17.819 14.076,17.808 14.457,17.783 C14.458,17.783 14.459,17.783 14.460,17.783 C15.419,17.719 16.810,17.565 18.348,17.200 C18.348,17.200 18.348,17.200 18.349,17.199 C18.539,17.155 18.732,17.106 18.926,17.054 C17.968,15.336 16.958,13.908 16.676,13.517 ZM22.712,13.989 C22.384,13.766 22.032,13.573 21.667,13.417 C21.296,13.259 20.908,13.138 20.513,13.056 C20.109,12.972 19.692,12.930 19.274,12.930 C18.856,12.930 18.440,12.972 18.034,13.056 C17.982,13.066 17.931,13.084 17.880,13.096 C18.181,13.506 19.197,14.928 20.135,16.665 C20.380,16.572 20.610,16.473 20.824,16.373 C20.828,16.371 20.832,16.369 20.836,16.367 C22.342,15.655 23.095,14.801 23.328,14.501 C23.128,14.324 22.932,14.139 22.712,13.989 ZM25.299,17.881 C25.218,17.483 25.098,17.093 24.940,16.717 C24.786,16.350 24.595,15.996 24.373,15.664 C24.271,15.511 24.140,15.380 24.024,15.237 C23.772,15.555 22.942,16.463 21.373,17.261 C21.357,17.269 21.340,17.277 21.323,17.285 C21.102,17.396 20.870,17.503 20.619,17.607 C20.767,17.912 20.910,18.221 21.042,18.534 C21.089,18.645 21.128,18.752 21.173,18.862 C21.396,18.834 21.618,18.814 21.838,18.801 C21.876,18.798 21.912,18.797 21.949,18.795 C22.138,18.785 22.322,18.779 22.505,18.777 C22.536,18.777 22.567,18.776 22.598,18.776 C22.807,18.776 23.011,18.780 23.207,18.788 C23.222,18.789 23.236,18.790 23.250,18.790 C23.428,18.798 23.598,18.809 23.763,18.823 C23.802,18.825 23.840,18.828 23.879,18.832 C24.039,18.846 24.192,18.861 24.334,18.877 C24.343,18.878 24.354,18.879 24.363,18.880 C24.516,18.898 24.653,18.917 24.782,18.935 C24.814,18.940 24.842,18.944 24.873,18.949 C24.969,18.964 25.055,18.977 25.132,18.991 C25.154,18.994 25.176,18.998 25.196,19.001 C25.287,19.017 25.362,19.031 25.419,19.043 C25.413,18.652 25.375,18.262 25.299,17.881 Z" class="cls-1"/>
                                <path d="M-22.540,36.000 C-31.778,36.000 -39.266,28.447 -39.266,19.132 C-39.266,9.815 -31.778,2.264 -22.540,2.264 C-13.303,2.264 -5.814,9.815 -5.814,19.132 C-5.814,28.447 -13.303,36.000 -22.540,36.000 ZM-22.540,6.481 C-29.468,6.481 -35.084,12.144 -35.084,19.132 C-35.084,26.118 -29.468,31.783 -22.540,31.783 C-15.612,31.783 -9.996,26.118 -9.996,19.132 C-9.996,12.144 -15.612,6.481 -22.540,6.481 ZM-17.311,19.170 L-18.366,19.162 L-18.352,17.012 L-20.484,17.012 L-20.484,15.946 L-18.382,15.946 L-18.382,13.841 L-17.292,13.828 L-17.279,15.998 L-15.225,15.998 L-15.225,17.014 L-17.311,17.014 L-17.311,19.170 ZM-23.101,14.449 C-22.317,14.753 -21.900,15.674 -21.900,16.619 C-21.900,17.412 -22.337,18.095 -22.952,18.581 C-23.553,19.054 -23.667,19.252 -23.667,19.655 C-23.667,19.999 -23.024,20.583 -22.686,20.823 C-21.702,21.525 -21.384,22.177 -21.384,23.265 C-21.384,24.622 -22.686,25.971 -25.045,25.971 C-27.113,25.971 -28.858,25.123 -28.858,23.765 C-28.858,22.388 -27.293,21.033 -25.224,21.033 C-24.999,21.033 -24.766,21.053 -24.552,21.053 C-24.835,20.775 -25.024,20.486 -25.024,20.067 C-25.024,19.818 -24.980,19.526 -24.869,19.314 C-24.982,19.322 -25.097,19.324 -25.216,19.324 C-26.914,19.324 -28.052,18.105 -28.052,16.595 C-28.052,15.117 -26.481,13.841 -24.811,13.841 C-23.880,13.841 -21.086,13.841 -21.086,13.841 L-21.920,14.449 L-23.101,14.449 ZM-24.804,21.409 C-26.233,21.393 -27.514,22.287 -27.514,23.362 C-27.514,24.458 -26.482,25.371 -25.052,25.371 C-23.043,25.371 -22.342,24.515 -22.342,23.418 C-22.342,23.286 -22.358,23.157 -22.387,23.031 C-22.545,22.410 -23.101,22.102 -23.877,21.558 C-24.160,21.466 -24.470,21.412 -24.804,21.409 ZM-23.239,16.693 C-23.405,15.422 -24.317,14.402 -25.276,14.373 C-26.236,14.344 -26.879,15.317 -26.714,16.589 C-26.548,17.859 -25.636,18.912 -24.676,18.941 C-23.717,18.970 -23.074,17.964 -23.239,16.693 Z" class="cls-1"/>
                                <path d="M-64.354,36.000 C-73.592,36.000 -81.080,28.447 -81.080,19.132 C-81.080,9.815 -73.592,2.264 -64.354,2.264 C-55.118,2.264 -47.628,9.815 -47.628,19.132 C-47.628,28.447 -55.118,36.000 -64.354,36.000 ZM-64.354,6.481 C-71.282,6.481 -76.899,12.144 -76.899,19.132 C-76.899,26.118 -71.282,31.783 -64.354,31.783 C-57.427,31.783 -51.810,26.118 -51.810,19.132 C-51.810,12.144 -57.427,6.481 -64.354,6.481 ZM-63.270,22.721 C-64.142,22.721 -64.961,22.246 -65.242,21.707 C-65.242,21.707 -65.711,23.582 -65.809,23.944 C-66.159,25.223 -67.187,26.503 -67.266,26.609 C-67.323,26.682 -67.446,26.659 -67.459,26.562 C-67.481,26.399 -67.743,24.785 -67.434,23.468 C-67.279,22.807 -66.396,19.032 -66.396,19.032 C-66.396,19.032 -66.654,18.513 -66.654,17.744 C-66.654,16.538 -65.960,15.637 -65.097,15.637 C-64.363,15.637 -64.008,16.193 -64.008,16.859 C-64.008,17.604 -64.479,18.716 -64.721,19.747 C-64.924,20.612 -64.291,21.316 -63.447,21.316 C-61.918,21.316 -60.888,19.335 -60.888,16.988 C-60.888,15.203 -62.079,13.868 -64.246,13.868 C-66.694,13.868 -68.221,15.710 -68.221,17.767 C-68.221,18.476 -68.013,18.977 -67.688,19.363 C-67.539,19.541 -67.518,19.613 -67.572,19.817 C-67.611,19.967 -67.699,20.327 -67.737,20.470 C-67.791,20.677 -67.956,20.750 -68.141,20.674 C-69.268,20.210 -69.794,18.964 -69.794,17.564 C-69.794,15.252 -67.860,12.479 -64.025,12.479 C-60.943,12.479 -58.915,14.727 -58.915,17.142 C-58.915,20.336 -60.675,22.721 -63.270,22.721 Z" class="cls-1"/>
                                <path d="M-106.168,36.000 C-115.406,36.000 -122.894,28.447 -122.894,19.132 C-122.894,9.815 -115.406,2.264 -106.168,2.264 C-96.932,2.264 -89.443,9.815 -89.443,19.132 C-89.443,28.447 -96.932,36.000 -106.168,36.000 ZM-106.168,6.481 C-113.096,6.481 -118.713,12.144 -118.713,19.132 C-118.713,26.118 -113.096,31.783 -106.168,31.783 C-99.241,31.783 -93.624,26.118 -93.624,19.132 C-93.624,12.144 -99.241,6.481 -106.168,6.481 ZM-110.455,15.489 L-110.455,13.509 C-104.826,13.509 -100.263,18.113 -100.263,23.788 L-102.227,23.788 C-102.227,19.212 -105.916,15.489 -110.455,15.489 ZM-103.831,23.788 L-105.795,23.788 C-105.795,21.196 -107.886,19.087 -110.455,19.087 L-110.455,17.107 C-106.795,17.107 -103.831,20.100 -103.831,23.788 ZM-109.254,21.365 C-108.590,21.365 -108.052,21.907 -108.052,22.576 C-108.052,23.246 -108.590,23.788 -109.254,23.788 C-109.917,23.788 -110.455,23.246 -110.455,22.576 C-110.455,21.907 -109.917,21.365 -109.254,21.365 Z" class="cls-1"/>
                                <path d="M-147.460,35.736 C-156.698,35.736 -164.186,28.184 -164.186,18.868 C-164.186,9.552 -156.698,2.000 -147.460,2.000 C-138.223,2.000 -130.734,9.552 -130.734,18.868 C-130.734,28.184 -138.223,35.736 -147.460,35.736 ZM-147.460,6.217 C-154.388,6.217 -160.005,11.881 -160.005,18.868 C-160.005,25.855 -154.388,31.519 -147.460,31.519 C-140.533,31.519 -134.916,25.855 -134.916,18.868 C-134.916,11.881 -140.533,6.217 -147.460,6.217 ZM-146.977,15.526 L-146.980,16.718 L-144.881,16.718 L-145.334,19.110 L-146.917,19.110 L-146.909,25.466 L-149.556,25.474 L-149.564,19.127 L-151.131,19.110 L-151.131,16.710 L-149.547,16.701 L-149.499,15.391 C-149.499,13.589 -148.882,12.460 -146.777,12.460 L-144.843,12.468 L-144.834,14.597 L-145.858,14.671 C-146.678,14.671 -146.977,14.951 -146.977,15.526 Z" class="cls-1"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <hr class="break"/>
            <MenuHeader className="MenuHeader" />
        </div>
    )
}

export default header;