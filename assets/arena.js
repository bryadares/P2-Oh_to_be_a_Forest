// The Description is returned as Markdown, of course.
let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.3.2/markdown-it.min.js';
document.head.appendChild(markdownIt)



const setBasics = (data) => {
	document.title = data.title
	document.getElementById('channel-title').innerHTML = data.title
	document.getElementById('channel-description').innerHTML = window.markdownit().render(data.metadata.description)

	// Add author/collaborators with image/links.
	// Error proof these.
}



const parseBlocks = (data) => {
	let blocks = [
		'audioEmbed',
		'audioFile',
		'image',
		'link',
		'pdf',
		'text',
		'videoEmbed',
		'videoFile',
	]

	blocks.forEach((type) => {
		let typeClass = type.replace(/[A-Z]/g, "-$&").toLowerCase()
		let typeName = type.split(/[A-Z]/g)[0];
		(typeName == 'pdf') ? typeName = typeName.toUpperCase() : typeName = typeName[0].toUpperCase() + typeName.slice(1)

		let typeContainer = document.querySelector(`.${typeClass}-blocks`)
		let typeTemplate = document.getElementById(`${typeClass}-block`)

		blocks[type] = {
			name: typeName,
			container: typeContainer,
			template: typeTemplate ? typeTemplate.content : null,
		}
	})

	data.contents.slice().reverse().forEach((block) => {
		switch (block.class) {
			case 'Attachment':
				let attachment = block.attachment.content_type
				if (attachment.includes('audio')) {
					renderBlock(block, blocks.audioFile)
				}
				else if (attachment.includes('pdf')) {
					renderBlock(block, blocks.pdf)
				}
				else if (attachment.includes('video')) {
					renderBlock(block, blocks.videoFile)
				}
				break

			case 'Image':
				renderBlock(block, blocks.image)
				break

			case 'Link':
				renderBlock(block, blocks.link)
				break

			case 'Media':
				let media = block.embed.type
				if (media.includes('rich')) {
					renderBlock(block, blocks.audioEmbed)
				}
				else if (media.includes('video')) {
					renderBlock(block, blocks.videoEmbed)
				}
				break

			case 'Text':
				renderBlock(block, blocks.text)
				break
		}
	})
}



const renderBlock = (block, type) => {
	if (!type.template || !type.container) return

	let template = type.template.cloneNode(true)
	let element = [
		'title',
		'image',
		'embed',
		'audio',
		'video',
		'link',
		'linkTitle',
		'content',
		'description',
		'type',
	]

	element = Object.assign({},
		...element.map(type => ({
			[type]: template.querySelector(`.${type.replace(/[A-Z]/g, "-$&").toLowerCase()}`)
		}))
	)

	if (element.title) block.title ? element.title.innerHTML = block.title : element.title.remove()
	if (element.image) block.image ? element.image.src = block.image.large.url : element.image.remove()
	if (element.embed) block.embed ? element.embed.innerHTML = block.embed.html : element.embed.remove()
	if (element.audio) block.attachment ? element.audio.src = block.attachment.url : element.audio.remove()
	if (element.video) block.attachment ? element.video.src = block.attachment.url : element.video.remove()
	if (element.link) {
		if (block.source) {
			element.link.href = block.source.url
			if (element.linkTitle) element.linkTitle.innerHTML = block.source.title
		}
		else if (block.attachment) {
			element.link.href = block.attachment.url
			if (element.linkTitle) element.linkTitle.innerHTML = block.title
		}
		else {
			element.link.remove()
			element.linkTitle.remove()
		}
	}
	if (element.content) block.content_html ? element.content.innerHTML = block.content_html : element.content.remove()
	if (element.description) block.description_html ? element.description.innerHTML = block.description_html : element.description.remove()
	if (element.type) element.type.innerHTML = type.name

	type.container.append(template)
}



window.addEventListener('DOMContentLoaded', () => {
	const channel = document.getElementById('channel-url').href.split('/').filter(Boolean).pop()

	fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
		.then(response => response.json())
		.then(data => {
			setBasics(data)
			parseBlocks(data)
		})
});

const sp1 = document.getElementById("sprout1");
const sp2 = document.getElementById("sprout2");
const sp3 = document.getElementById("sprout3");
const sp4 = document.getElementById("sprout4");
const sp5 = document.getElementById("sprout5");
const sp6 = document.getElementById("sprout6");
const sp7 = document.getElementById("sprout7");
const sp8 = document.getElementById("sprout8");
const sp9 = document.getElementById("sprout9");
const sp10 = document.getElementById("sprout10");
const sp11 = document.getElementById("sprout11");
const sp12 = document.getElementById("sprout12");
const sp13 = document.getElementById("sprout13");
const sp14 = document.getElementById("sprout14");
const sp15 = document.getElementById("sprout15");
const sp16 = document.getElementById("sprout16");
const sp17 = document.getElementById("sprout17");
const sp18 = document.getElementById("sprout18");
const sp19 = document.getElementById("sprout19");
const sp20 = document.getElementById("sprout20");
const sp21 = document.getElementById("sprout21");

const sprouts = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10, sp11, sp12, sp13, sp14, sp15, sp16, sp17, sp18, sp19, sp20, sp21];

const body = document.querySelector("body");
const bodyColor = body.style.backgroundColor;
// sp1.style.backgroundColor = "red";

//https://www.w3docs.com/snippets/javascript/how-to-detect-idle-time-in-javascript.html

let colors = ["pink","red","orange","yellow","magenta","white"];
let color = null;
let randNum = 0;

let code = [0,0,0];
const eggDiv = document.getElementById("egg");

let counter = 0;
let timeoutDur = 3000;

function easterEgg() {
	eggDiv.style.opacity = "50%";
	console.log("Easter Egg!!");
};

function clearSprouts() {
	for (var i = 0; i < sprouts.length; i++) {
		sprouts[i].style.backgroundColor = null;
	}
};

let topV = "0px";
let leftV = "0px";
let vw = window.innerWidth;
let vh = window.innerHeight;
let lever = 0;
let leverCounter = counter;


let inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  window.onscroll = resetTimer;

  function sprout() {
  	let vw = window.innerWidth;
		let vh = window.innerHeight;
  	//assigns color
  	randNum = Math.round(Math.random() * (colors.length - 1));
  	color = colors[randNum];
    sprouts[counter].style.backgroundColor = color;

    //works when lever is flipped
    if(lever == 1)
    {
    	color = bodyColor;
    	leverCounter = counter + 1;
    	if(leverCounter >= sprouts.length)
    		{leverCounter = leverCounter - sprouts.length;}
    	sprouts[leverCounter].style.backgroundColor = color;
    };

    //assigns location
    randNum = Math.random();
    topV =  randNum * vh;
    randNum = Math.random();
    leftV = randNum * vw;
    sprouts[counter].style.top = (topV.toString() + "px");
    sprouts[counter].style.left = (leftV.toString() + "px");
    counter++;
    if (counter >= (sprouts.length - 1))
    	{lever = 1;};
    if (counter >= sprouts.length)
    	{counter = 0;};
    time = setTimeout(sprout, timeoutDur);

    console.log(counter + " bloom(s)");
  }

  function resetTimer() {
  	if(counter != 0)
  	{
  		code[0] = code[1];
  		code[1] = code[2];
  		code[2] = counter;
  	}

  	while(code[2] > 9)
  	{
  		code[2] = code[2] - 10;
  	}

  	counter = 0;
  	lever = 0;
  	vw = window.innerWidth;
		vh = window.innerHeight;
  	clearSprouts();
    clearTimeout(time);
    time = setTimeout(sprout, timeoutDur)
    if(code == "2,1,0"){
    	easterEgg();
    }
  }
};
inactivityTime();


