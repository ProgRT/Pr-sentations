interpCol = d3.interpolateHsl("red", "green")

function colASC(x){
	return interpCol((x-.5)/.5);
}

function fmtASC(x){
	const c = colASC(x)
	return html`<span>${x}</span> <span style="color:${c};">⬤</span>`;
}

function fmtInd(x){
	var x = x.replace("0.1", "<sub>0.1</sub>");
	var x = x.replace("mus", "<sub>mus</sub>");
	var x = x.replace(" es", "<sub> es</sub>");
	var x = x.replace("occ", "<sub>occ</sub>");
	return html`${x}`;
}

function tablePerformance(dataset){
	const columns = [
		"Étude",
		"Indice",
		"Référence",
		"Seuil",
		"ASC",
		"Sen",
		"VPN",
		"Spe",
		"VPP"
	];

	const header = {
		Seuil: "🎯 Seuil",
		Référence: "🍎🍊 Référence",
		ASC: "📈 Aire sous courbe",
		Sen: "Sensibilité",
		Spe: "Spécificité",
		VPP: "✅ VPP",
		VPN: "❌ VPN"
	};

	const aligns = {
		Seuil: "center",
		ASC: "center",
		Sen: "center",
		Spe: "center",
		Référence: "center"
	};

	return Inputs.table(dataset, {
		columns: columns,
		header: header,
		align: aligns,
		select: false,
		format: {
			ASC: fmtASC,
			Iidice: fmtInd
		},
		width: {
			ASC: 250
		},
		sort: "Indice",
		rows: 28,
		select: false
	})
}
