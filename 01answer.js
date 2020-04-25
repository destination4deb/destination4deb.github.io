d3.csv('ue_industry.csv', data => {
	// Define your scales and generator here.
	const industries = ['Agriculture'];
	const colors = ['#40655e'];
	const xScale = d3.scaleLinear()
		.domain(d3.extent(data, d => +d.index))
		.range([1180, 20]);
	const yScale = d3.scaleLinear()
		.domain(d3.extent(data, d => +d.Agriculture))
        .range([580, 20]);
	const fillScale = d3.scaleOrdinal()
		.domain(industries)
		.range(colors);

	Object.keys(data).forEach(key => {
		if (key != 'index') {
			var line = d3.line()
				.x(d => xScale(d.index))
				.y(d => yScale(d.Agriculture))
				.curve(d3.curveCardinal);
			d3.select('#answer1')
				// append more elements here
				.append('path')
				.attr('d', line(data))
				.attr('stroke', fillScale(key))
		}
	});
});