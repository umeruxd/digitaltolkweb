const locations = (color, size) => {
	return `<svg width="${size && size.width ? size.width : 18}" height="${
		size && size.height ? size.height : 24
	}" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9,0.5c-2.4,0-4.7,1-6.4,2.7C0.9,4.9,0,7.3,0,9.7c0,6.2,7.9,13.2,8.3,13.5c0.2,0.2,0.5,0.3,0.7,0.3
	s0.5-0.1,0.7-0.3c0.4-0.3,8.3-7.3,8.3-13.5c0-2.4-0.9-4.8-2.6-6.5C13.7,1.5,11.4,0.5,9,0.5z M9,20.8c-2.4-2.3-6.8-7.2-6.8-11.1
	c0-1.8,0.7-3.6,2-4.9s3-2,4.8-2c1.8,0,3.5,0.7,4.8,2c1.3,1.3,2,3,2,4.9C15.8,13.5,11.4,18.5,9,20.8z M9,5.1c-0.9,0-1.8,0.3-2.5,0.8
	C5.8,6.4,5.2,7.1,4.8,8c-0.3,0.8-0.4,1.8-0.3,2.6c0.2,0.9,0.6,1.7,1.2,2.3c0.6,0.6,1.4,1.1,2.3,1.3c0.9,0.2,1.8,0.1,2.6-0.3
	c0.8-0.3,1.5-0.9,2-1.7c0.5-0.8,0.8-1.6,0.8-2.5c0-1.2-0.5-2.4-1.3-3.2C11.3,5.6,10.2,5.1,9,5.1z M9,12c-0.4,0-0.9-0.1-1.3-0.4
	c-0.4-0.3-0.7-0.6-0.8-1S6.7,9.7,6.8,9.3c0.1-0.4,0.3-0.9,0.6-1.2c0.3-0.3,0.7-0.5,1.2-0.6c0.4-0.1,0.9,0,1.3,0.1
	c0.4,0.2,0.8,0.5,1,0.8c0.2,0.4,0.4,0.8,0.4,1.3c0,0.6-0.2,1.2-0.7,1.6C10.2,11.8,9.6,12,9,12z" fill="${color}"/>
    </svg>
`;
};

export default locations;
