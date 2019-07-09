import React, {Component} from 'react';
import Anime from 'animejs';
import Styled from 'styled-components/typings/styled-components';

const AnimeSVG = Styled.svg`
    margin: auto;
    display: block;
    width: 500px;
    height: 500px;
    top:0;left:0;bottom:0;right:0;
    stroke-width: 1px;
    stroke: rgba(80, 80, 80, .35);
    backface-visibility: hidden;
    .st0{
        fill: url(#sphereGradient);
        stroke: rgba(80, 80, 80, .35);
        stroke-width: 1px;
        backface-visibility: hidden;
    }
`;


class Triangle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: false
		};
		this.setOrReset = this.setOrReset.bind(this)
	}

	drawSVG = (target) => {
		const sphere_lines = target.querySelectorAll(".st0");
		const pathLength = sphere_lines.length;
		let animations = [];
		const breathAnimation = Anime({
			begin: function () {
				for (let i = 0; i < pathLength; i++) {
					animations.push(Anime({
						targets: sphere_lines[i],
						stroke: {value: ['rgba(255,75,75,1)', 'rgba(80,80,80,.35)'], duration: 500},
						translateX: [2, -4],
						translateY: [2, -4],
						easing: 'easeOutQuad',
						autoplay: false
					}));
				}
			},
			update: function (ins) {
				animations.forEach(function (animation, i) {
					let percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
					animation.seek(animation.duration * percent);
				});
			},
			duration: Infinity,
			autoplay: false
		});

		const shadowAnimation = Anime({
			targets: '#sphereGradient',
			x1: '25%',
			x2: '25%',
			y1: '0%',
			y2: '75%',
			duration: 30000,
			easing: 'easeOutQuint',
			autoplay: false
		}, 0);

		breathAnimation.play();
		shadowAnimation.play();
	};


	componentDidMount() {
		this.drawSVG(this.svg);
	}

	setOrReset() {
		this.setState({
			animate: !this.state.animate
		});
	}

	render() {
		return (
			<div style={{height: "475px", margin: "auto", textAlign: "center"}}>
				<AnimeSVG id="sphere-svg" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" innerRef={node => {
					this.svg = node
				}} stroke="rgba(80,80,80,.35)">
					<g>
						<defs>
							<linearGradient id="sphereGradient" x1="5%" x2="5%" y1="0%" y2="15%">
								<stop stop-color="#373734" offset="0%"/>
								<stop stop-color="#242423" offset="50%"/>
								<stop stop-color="#0D0D0C" offset="100%"/>
							</linearGradient>
						</defs>
						<path className="st0" d="M52.326,1128.47c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.547-0.106-2.269L576.623,72.816
		c0.388-0.776,1.175-1.271,2.042-1.286c0.954,0.021,1.669,0.454,2.084,1.215l568.968,1046.332c0.391,0.719,0.376,1.591-0.042,2.295
		c-0.415,0.706-1.172,1.139-1.99,1.144L52.338,1128.47C52.335,1128.47,52.329,1128.47,52.326,1128.47z M578.789,78.886
		L56.101,1123.796l1087.669-5.912L578.789,78.886z"/>
						<path d="M79.38,1116.068c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.547-0.106-2.269l499.324-998.369
		c0.388-0.776,1.175-1.271,2.042-1.286c0.954,0.059,1.669,0.454,2.084,1.215l539.672,992.777c0.391,0.719,0.376,1.59-0.042,2.295
		c-0.415,0.706-1.172,1.139-1.99,1.144l-1038.996,5.593C79.389,1116.068,79.383,1116.068,79.38,1116.068z M578.789,120.402
		L83.155,1111.395l1031.319-5.552L578.789,120.402z"/>
						<path className="st0" d="M106.432,1103.667c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.547-0.106-2.269l472.273-944.45
		c0.388-0.776,1.175-1.271,2.042-1.286c0.954-0.014,1.669,0.456,2.084,1.216l510.379,939.22c0.391,0.718,0.376,1.591-0.042,2.295
		c-0.415,0.704-1.172,1.138-1.99,1.142l-982.652,5.23C106.441,1103.667,106.435,1103.667,106.432,1103.667z M578.789,161.921
		l-468.583,937.073l974.975-5.19L578.789,161.921z"/>
						<path className="st0" d="M133.486,1091.265c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.545-0.106-2.269l445.219-890.533
		c0.388-0.776,1.175-1.271,2.042-1.286c0.954,0.023,1.669,0.454,2.084,1.216l481.083,885.664c0.391,0.718,0.376,1.591-0.042,2.295
		c-0.415,0.704-1.172,1.138-1.99,1.142l-926.302,4.869C133.495,1091.265,133.489,1091.265,133.486,1091.265z M578.789,203.438
		l-441.529,883.154l918.628-4.829L578.789,203.438z"/>
						<path className="st0" d="M160.537,1078.864c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.545-0.106-2.269l418.168-836.615
		c0.388-0.776,1.175-1.271,2.042-1.286c0.954,0.059,1.669,0.456,2.084,1.216l451.79,832.11c0.391,0.72,0.376,1.591-0.042,2.295
		c-0.415,0.704-1.172,1.138-1.99,1.142l-869.957,4.505C160.546,1078.864,160.54,1078.864,160.537,1078.864z M578.789,244.955
		l-414.477,829.235l862.283-4.466L578.789,244.955z"/>
						<path className="st0" d="M187.591,1066.462c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.545-0.106-2.269l391.113-782.698
		c0.388-0.776,1.175-1.271,2.042-1.286c0.954-0.012,1.672,0.457,2.084,1.216l422.494,778.555c0.391,0.719,0.376,1.591-0.042,2.295
		c-0.418,0.704-1.172,1.138-1.99,1.142l-813.607,4.143C187.6,1066.462,187.594,1066.462,187.591,1066.462z M578.789,286.473
		l-387.423,775.316l805.933-4.104L578.789,286.473z"/>
						<path className="st0" d="M214.645,1054.061c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.545-0.106-2.268l364.059-728.78
		c0.388-0.777,1.175-1.272,2.042-1.288c0.954,0.024,1.672,0.456,2.084,1.218l393.201,724.999c0.391,0.718,0.373,1.591-0.042,2.293
		c-0.418,0.704-1.172,1.138-1.99,1.142l-757.26,3.781C214.654,1054.061,214.648,1054.061,214.645,1054.061z M578.789,327.99
		l-360.372,721.399l749.589-3.743L578.789,327.99z"/>
						<path className="st0" d="M241.696,1041.659c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.545-0.106-2.268L576.623,363.43
		c0.388-0.777,1.175-1.272,2.042-1.288c0.954,0.062,1.672,0.456,2.084,1.218l363.908,671.444c0.391,0.72,0.373,1.591-0.042,2.295
		c-0.418,0.703-1.172,1.136-1.99,1.141l-700.916,3.419C241.706,1041.659,241.699,1041.659,241.696,1041.659z M578.789,369.508
		l-333.321,667.48l693.248-3.381L578.789,369.508z"/>
						<path className="st0" d="M268.751,1029.256c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.545-0.106-2.268l309.954-620.944
		c0.388-0.777,1.175-1.272,2.042-1.288c0.727-0.024,1.672,0.456,2.084,1.219l334.612,617.89c0.391,0.718,0.373,1.589-0.042,2.293
		c-0.418,0.704-1.172,1.136-1.99,1.141l-644.565,3.054C268.757,1029.256,268.754,1029.256,268.751,1029.256z M578.789,411.027
		l-306.267,613.557l636.897-3.017L578.789,411.027z"/>
						<path className="st0" d="M295.802,1016.854c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.545-0.106-2.268l282.903-567.026
		c0.388-0.777,1.175-1.272,2.042-1.288c0.945-0.058,1.672,0.456,2.084,1.219l305.318,564.334c0.391,0.72,0.373,1.591-0.042,2.293
		c-0.418,0.704-1.175,1.138-1.99,1.141l-588.221,2.692C295.808,1016.854,295.805,1016.854,295.802,1016.854z M578.789,452.546
		l-279.219,559.639l580.556-2.657L578.789,452.546z"/>
						<path className="st0" d="M322.856,1004.453c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.544-0.106-2.266L576.623,487.98
		c0.388-0.777,1.175-1.274,2.042-1.289c0.945-0.092,1.672,0.457,2.087,1.221L856.775,998.69c0.388,0.72,0.37,1.591-0.045,2.293
		c-0.418,0.703-1.175,1.136-1.993,1.139l-531.871,2.33C322.862,1004.453,322.859,1004.453,322.856,1004.453z M578.786,494.065
		L326.625,999.782l524.209-2.296L578.786,494.065z"/>
						<path className="st0" d="M349.91,992.051c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.686-0.467-1.544-0.106-2.266l228.794-459.19
		c0.385-0.777,1.175-1.274,2.042-1.289c0.945-0.02,1.675,0.457,2.087,1.222l246.729,457.223c0.388,0.72,0.37,1.589-0.048,2.292
		c-0.415,0.703-1.172,1.136-1.99,1.139l-475.524,1.966C349.916,992.051,349.913,992.051,349.91,992.051z M578.786,535.586
		l-225.11,451.796l467.868-1.934L578.786,535.586z"/>
						<path className="st0" d="M376.961,979.649c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.685-0.467-1.542-0.109-2.266L576.62,571.014
		c0.388-0.779,1.179-1.277,2.048-1.291c0.724-0.053,1.672,0.458,2.084,1.224l217.433,403.668c0.388,0.719,0.37,1.589-0.048,2.292
		s-1.172,1.135-1.99,1.138l-419.176,1.604C376.967,979.649,376.964,979.649,376.961,979.649z M578.786,577.108L380.727,974.981
		l411.524-1.574L578.786,577.108z"/>
						<path className="st0" d="M404.016,967.248c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.685-0.467-1.542-0.109-2.265L576.62,612.53
		c0.388-0.779,1.179-1.277,2.048-1.291c0.012,0,0.024,0,0.036,0c0.854,0,1.645,0.47,2.051,1.225l188.14,350.112
		c0.385,0.72,0.367,1.589-0.052,2.292c-0.418,0.701-1.175,1.133-1.99,1.136l-362.829,1.242
		C404.022,967.248,404.019,967.248,404.016,967.248z M578.786,618.632L407.778,962.581l355.182-1.215L578.786,618.632z"/>
						<path className="st0" d="M431.067,954.846c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.685-0.467-1.541-0.109-2.263L576.62,654.048
		c0.388-0.78,1.179-1.279,2.048-1.292c0.879,0.026,1.675,0.461,2.087,1.229L739.6,950.541c0.385,0.719,0.367,1.589-0.055,2.29
		c-0.418,0.701-1.172,1.132-1.99,1.135l-306.482,0.88C431.07,954.846,431.07,954.846,431.067,954.846z M578.783,660.157
		l-143.96,290.025l298.844-0.859L578.783,660.157z"/>
						<path className="st0" d="M458.121,942.445c-0.803,0-1.551-0.415-1.975-1.098c-0.427-0.683-0.467-1.539-0.109-2.262L576.62,695.565
		c0.385-0.78,1.179-1.28,2.048-1.294c0.879,0.029,1.678,0.462,2.09,1.232L710.31,938.506c0.382,0.721,0.361,1.591-0.058,2.29
		s-1.175,1.13-1.99,1.132l-250.135,0.517C458.124,942.445,458.124,942.445,458.121,942.445z M578.78,701.688L461.875,937.784
		l242.509-0.501L578.78,701.688z"/>
						<path className="st0" d="M485.175,930.043c-0.803,0-1.551-0.415-1.975-1.097c-0.424-0.683-0.467-1.538-0.112-2.26l93.529-189.602
		c0.388-0.783,1.182-1.285,2.054-1.297c0.988-0.021,1.681,0.465,2.09,1.239l100.255,189.448c0.382,0.719,0.357,1.587-0.064,2.287
		c-0.421,0.698-1.175,1.127-1.99,1.127l-193.784,0.155C485.175,930.043,485.175,930.043,485.175,930.043z M578.777,743.227
		l-89.857,182.16l186.177-0.148L578.777,743.227z"/>
						<path className="st0" d="M649.666,917.849h-0.003l-137.44-0.208c-0.803-0.002-1.548-0.415-1.972-1.097c-0.424-0.682-0.467-1.533-0.115-2.254
		l66.478-135.685c0.388-0.788,1.185-1.291,2.06-1.303c0.842,0.058,1.687,0.473,2.093,1.25l70.962,135.892
		c0.376,0.723,0.348,1.588-0.073,2.284C651.233,917.425,650.478,917.849,649.666,917.849z M515.956,912.994l129.869,0.195
		l-67.054-128.406L515.956,912.994z"/>
						<path className="st0" d="M620.373,905.809c-0.006,0-0.012,0-0.015,0l-81.093-0.57c-0.8-0.006-1.539-0.42-1.96-1.097
		c-0.421-0.677-0.467-1.522-0.121-2.24l39.424-81.767c0.385-0.798,1.188-1.307,2.075-1.316c0.006,0,0.015,0,0.021,0
		c0.876,0,1.678,0.492,2.075,1.275l41.669,82.337c0.367,0.724,0.33,1.587-0.097,2.277
		C621.927,905.393,621.179,905.809,620.373,905.809z M542.974,900.612l73.601,0.517l-37.818-74.729L542.974,900.612z"/>
						<path className="st0" d="M591.077,893.771c-0.03,0-0.058,0-0.088-0.002l-24.746-0.933c-0.773-0.029-1.478-0.439-1.887-1.094
		c-0.409-0.656-0.464-1.471-0.151-2.177l12.373-27.849c0.376-0.847,1.13-1.279,2.142-1.382c0.924,0.006,1.757,0.559,2.124,1.407
		l12.373,28.783c0.315,0.733,0.23,1.577-0.221,2.236C592.562,893.394,591.844,893.771,591.077,893.771z M569.852,888.316
		l17.632,0.664l-8.816-20.509L569.852,888.316z"/>
					</g>
				</AnimeSVG>
			</div>
		);
	}
}

export default Triangle;