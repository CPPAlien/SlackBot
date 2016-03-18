var request = require('request')

var emojiDict = {
    happy: [
        ':grinning:',
        ':joy:',
        ':smile:'
    ],

    normal: [
        ':no_mouth:',
        ':flushed:'
    ],

    unhappy: [
        ':rage:',
        ':hankey:',
        ':triumph:',
    ]
}


function getRandomNum(Min, Max) {
	var Range = Max - Min;   
	var Rand = Math.random();   
	return (Min + Math.round(Rand * Range));
}   

function getEmoji(pos) {
    var arr = [':qbi:']
    
    if (pos >= 0 && pos < 0.4) {
        arr = emojiDict.unhappy
    } else if (pos >= 0.4 && pos < 0.7) {
        arr = emojiDict.normal
    } else if (pos >= 0.7) {
        arr = emojiDict.happy
    }

    var index = getRandomNum(0, arr.length-1)

    return arr[index]
}

function requestSentimentEn(text, callback) {

    var data = {
        headers: {'content-type': 'application/json'},
        url:'http://text-processing.com/api/sentiment/',
        body: 'text='+text,
        json: false
    };

    request.post(data, function(error, response, body) {
        var result = '> <!';

        console.log('POST '+ data.url);

        if (error){
            console.log('Error:', error);
            callback(result);
            return
        }

        if (response.statusCode !== 200){
            console.log('Invalid status code:', response.statusCode);
            console.log('Body: ', body);
            callback(result)
            return
        }

        var pos = JSON.parse(body).probability.pos
        result = getEmoji(pos)

        callback(result);
    });

};

function requestSentimentZhHans(text, callback) {
    // TODO:
};

exports.generateEmo = function(text, callback) {

    requestSentimentEn(text, callback)

}