(function (_)
	_.mixin({		
		// Split an array into custom sized chunks
		chunkize: function (arr, chunkSize) {
			var arrLength = arr.length;
			var chunks = [];
			for (var chunkIndex=0; chunkIndex < arrLength / chunkSize; chunkIndex++) {
				chunks.push(arr.slice(chunkIndex*chunkSize, (chunkIndex+1)*chunkSize));				
			}
			return chunks;
		}
	});
)(_);