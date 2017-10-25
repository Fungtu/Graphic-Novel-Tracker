var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	//The mangapage that we will be scraping
	url = 'http://www.mangahere.co/manga/tower_of_god/';
	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

	        var name, currentChap;
	        var json = { name : "", currentChap : ""};

	        // We'll use the unique header class as a starting point.

	        $('#main > article > div > div.box_w.clearfix > h1').filter(function(){
	            json.name = $(this).text();
	        })

	        $('#main > article > div > div.manga_detail > div.detail_list > ul:nth-child(3) > li:nth-child(1) > span.left > a').filter(function(){
	        	var currentChap = $(this).text();
	        	currentChap = currentChap.replace(/[^0-9]/ig, "");
	        	json.currentChap =  currentChap;
	        })
	    }
	    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
    	console.log('File successfully written! - Check your project directory for the output.json file');
		})
		res.send('Check your console!')
	})
})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;