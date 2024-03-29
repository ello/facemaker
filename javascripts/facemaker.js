
// =========================================================================
// add load-image.js for correction image orientation: https://raw.githubusercontent.com/blueimp/JavaScript-Load-Image/master/js/load-image.all.min.js
// =========================================================================
!function(a){"use strict";var b=function(a,c,d){var e,f,g=document.createElement("img");if(g.onerror=c,g.onload=function(){!f||d&&d.noRevoke||b.revokeObjectURL(f),c&&c(b.scale(g,d))},b.isInstanceOf("Blob",a)||b.isInstanceOf("File",a))e=f=b.createObjectURL(a),g._type=a.type;else{if("string"!=typeof a)return!1;e=a,d&&d.crossOrigin&&(g.crossOrigin=d.crossOrigin)}return e?(g.src=e,g):b.readFile(a,function(a){var b=a.target;b&&b.result?g.src=b.result:c&&c(a)})},c=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;b.isInstanceOf=function(a,b){return Object.prototype.toString.call(b)==="[object "+a+"]"},b.transformCoordinates=function(){},b.getTransformedOptions=function(a,b){var c,d,e,f,g=b.aspectRatio;if(!g)return b;c={};for(d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c.crop=!0,e=a.naturalWidth||a.width,f=a.naturalHeight||a.height,e/f>g?(c.maxWidth=f*g,c.maxHeight=f):(c.maxWidth=e,c.maxHeight=e/g),c},b.renderImageToCanvas=function(a,b,c,d,e,f,g,h,i,j){return a.getContext("2d").drawImage(b,c,d,e,f,g,h,i,j),a},b.hasCanvasOption=function(a){return a.canvas||a.crop||a.aspectRatio},b.scale=function(a,c){c=c||{};var d,e,f,g,h,i,j,k,l,m=document.createElement("canvas"),n=a.getContext||b.hasCanvasOption(c)&&m.getContext,o=a.naturalWidth||a.width,p=a.naturalHeight||a.height,q=o,r=p,s=function(){var a=Math.max((f||q)/q,(g||r)/r);a>1&&(q*=a,r*=a)},t=function(){var a=Math.min((d||q)/q,(e||r)/r);1>a&&(q*=a,r*=a)};return n&&(c=b.getTransformedOptions(a,c),j=c.left||0,k=c.top||0,c.sourceWidth?(h=c.sourceWidth,void 0!==c.right&&void 0===c.left&&(j=o-h-c.right)):h=o-j-(c.right||0),c.sourceHeight?(i=c.sourceHeight,void 0!==c.bottom&&void 0===c.top&&(k=p-i-c.bottom)):i=p-k-(c.bottom||0),q=h,r=i),d=c.maxWidth,e=c.maxHeight,f=c.minWidth,g=c.minHeight,n&&d&&e&&c.crop?(q=d,r=e,l=h/i-d/e,0>l?(i=e*h/d,void 0===c.top&&void 0===c.bottom&&(k=(p-i)/2)):l>0&&(h=d*i/e,void 0===c.left&&void 0===c.right&&(j=(o-h)/2))):((c.contain||c.cover)&&(f=d=d||f,g=e=e||g),c.cover?(t(),s()):(s(),t())),n?(m.width=q,m.height=r,b.transformCoordinates(m,c),b.renderImageToCanvas(m,a,j,k,h,i,0,0,q,r)):(a.width=q,a.height=r,a)},b.createObjectURL=function(a){return c?c.createObjectURL(a):!1},b.revokeObjectURL=function(a){return c?c.revokeObjectURL(a):!1},b.readFile=function(a,b,c){if(window.FileReader){var d=new FileReader;if(d.onload=d.onerror=b,c=c||"readAsDataURL",d[c])return d[c](a),d}return!1},"function"==typeof define&&define.amd?define(function(){return b}):a.loadImage=b}(this),function(a){"use strict";"function"==typeof define&&define.amd?define(["load-image"],a):a(window.loadImage)}(function(a){"use strict";if(window.navigator&&window.navigator.platform&&/iP(hone|od|ad)/.test(window.navigator.platform)){var b=a.renderImageToCanvas;a.detectSubsampling=function(a){var b,c;return a.width*a.height>1048576?(b=document.createElement("canvas"),b.width=b.height=1,c=b.getContext("2d"),c.drawImage(a,-a.width+1,0),0===c.getImageData(0,0,1,1).data[3]):!1},a.detectVerticalSquash=function(a,b){var c,d,e,f,g,h=a.naturalHeight||a.height,i=document.createElement("canvas"),j=i.getContext("2d");for(b&&(h/=2),i.width=1,i.height=h,j.drawImage(a,0,0),c=j.getImageData(0,0,1,h).data,d=0,e=h,f=h;f>d;)g=c[4*(f-1)+3],0===g?e=f:d=f,f=e+d>>1;return f/h||1},a.renderImageToCanvas=function(c,d,e,f,g,h,i,j,k,l){if("image/jpeg"===d._type){var m,n,o,p,q=c.getContext("2d"),r=document.createElement("canvas"),s=1024,t=r.getContext("2d");if(r.width=s,r.height=s,q.save(),m=a.detectSubsampling(d),m&&(e/=2,f/=2,g/=2,h/=2),n=a.detectVerticalSquash(d,m),m||1!==n){for(f*=n,k=Math.ceil(s*k/g),l=Math.ceil(s*l/h/n),j=0,p=0;h>p;){for(i=0,o=0;g>o;)t.clearRect(0,0,s,s),t.drawImage(d,e,f,g,h,-o,-p,g,h),q.drawImage(r,0,0,s,s,i,j,k,l),o+=s,i+=k;p+=s,j+=l}return q.restore(),c}}return b(c,d,e,f,g,h,i,j,k,l)}}}),function(a){"use strict";"function"==typeof define&&define.amd?define(["load-image"],a):a(window.loadImage)}(function(a){"use strict";var b=a.hasCanvasOption,c=a.transformCoordinates,d=a.getTransformedOptions;a.hasCanvasOption=function(c){return b.call(a,c)||c.orientation},a.transformCoordinates=function(b,d){c.call(a,b,d);var e=b.getContext("2d"),f=b.width,g=b.height,h=d.orientation;if(h&&!(h>8))switch(h>4&&(b.width=g,b.height=f),h){case 2:e.translate(f,0),e.scale(-1,1);break;case 3:e.translate(f,g),e.rotate(Math.PI);break;case 4:e.translate(0,g),e.scale(1,-1);break;case 5:e.rotate(.5*Math.PI),e.scale(1,-1);break;case 6:e.rotate(.5*Math.PI),e.translate(0,-g);break;case 7:e.rotate(.5*Math.PI),e.translate(f,-g),e.scale(-1,1);break;case 8:e.rotate(-.5*Math.PI),e.translate(-f,0)}},a.getTransformedOptions=function(b,c){var e,f,g=d.call(a,b,c),h=g.orientation;if(!h||h>8||1===h)return g;e={};for(f in g)g.hasOwnProperty(f)&&(e[f]=g[f]);switch(g.orientation){case 2:e.left=g.right,e.right=g.left;break;case 3:e.left=g.right,e.top=g.bottom,e.right=g.left,e.bottom=g.top;break;case 4:e.top=g.bottom,e.bottom=g.top;break;case 5:e.left=g.top,e.top=g.left,e.right=g.bottom,e.bottom=g.right;break;case 6:e.left=g.top,e.top=g.right,e.right=g.bottom,e.bottom=g.left;break;case 7:e.left=g.bottom,e.top=g.right,e.right=g.top,e.bottom=g.left;break;case 8:e.left=g.bottom,e.top=g.left,e.right=g.top,e.bottom=g.right}return g.orientation>4&&(e.maxWidth=g.maxHeight,e.maxHeight=g.maxWidth,e.minWidth=g.minHeight,e.minHeight=g.minWidth,e.sourceWidth=g.sourceHeight,e.sourceHeight=g.sourceWidth),e}}),function(a){"use strict";"function"==typeof define&&define.amd?define(["load-image"],a):a(window.loadImage)}(function(a){"use strict";var b=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);a.blobSlice=b&&function(){var a=this.slice||this.webkitSlice||this.mozSlice;return a.apply(this,arguments)},a.metaDataParsers={jpeg:{65505:[]}},a.parseMetaData=function(b,c,d){d=d||{};var e=this,f=d.maxMetaDataSize||262144,g={},h=!(window.DataView&&b&&b.size>=12&&"image/jpeg"===b.type&&a.blobSlice);(h||!a.readFile(a.blobSlice.call(b,0,f),function(b){if(b.target.error)return console.log(b.target.error),void c(g);var f,h,i,j,k=b.target.result,l=new DataView(k),m=2,n=l.byteLength-4,o=m;if(65496===l.getUint16(0)){for(;n>m&&(f=l.getUint16(m),f>=65504&&65519>=f||65534===f);){if(h=l.getUint16(m+2)+2,m+h>l.byteLength){console.log("Invalid meta data: Invalid segment size.");break}if(i=a.metaDataParsers.jpeg[f])for(j=0;j<i.length;j+=1)i[j].call(e,l,m,h,g,d);m+=h,o=m}!d.disableImageHead&&o>6&&(g.imageHead=k.slice?k.slice(0,o):new Uint8Array(k).subarray(0,o))}else console.log("Invalid JPEG file: Missing JPEG marker.");c(g)},"readAsArrayBuffer"))&&c(g)}}),function(a){"use strict";"function"==typeof define&&define.amd?define(["load-image","load-image-meta"],a):a(window.loadImage)}(function(a){"use strict";a.ExifMap=function(){return this},a.ExifMap.prototype.map={Orientation:274},a.ExifMap.prototype.get=function(a){return this[a]||this[this.map[a]]},a.getExifThumbnail=function(a,b,c){var d,e,f;if(!c||b+c>a.byteLength)return void console.log("Invalid Exif data: Invalid thumbnail data.");for(d=[],e=0;c>e;e+=1)f=a.getUint8(b+e),d.push((16>f?"0":"")+f.toString(16));return"data:image/jpeg,%"+d.join("%")},a.exifTagTypes={1:{getValue:function(a,b){return a.getUint8(b)},size:1},2:{getValue:function(a,b){return String.fromCharCode(a.getUint8(b))},size:1,ascii:!0},3:{getValue:function(a,b,c){return a.getUint16(b,c)},size:2},4:{getValue:function(a,b,c){return a.getUint32(b,c)},size:4},5:{getValue:function(a,b,c){return a.getUint32(b,c)/a.getUint32(b+4,c)},size:8},9:{getValue:function(a,b,c){return a.getInt32(b,c)},size:4},10:{getValue:function(a,b,c){return a.getInt32(b,c)/a.getInt32(b+4,c)},size:8}},a.exifTagTypes[7]=a.exifTagTypes[1],a.getExifValue=function(b,c,d,e,f,g){var h,i,j,k,l,m,n=a.exifTagTypes[e];if(!n)return void console.log("Invalid Exif data: Invalid tag type.");if(h=n.size*f,i=h>4?c+b.getUint32(d+8,g):d+8,i+h>b.byteLength)return void console.log("Invalid Exif data: Invalid data offset.");if(1===f)return n.getValue(b,i,g);for(j=[],k=0;f>k;k+=1)j[k]=n.getValue(b,i+k*n.size,g);if(n.ascii){for(l="",k=0;k<j.length&&(m=j[k],"\x00"!==m);k+=1)l+=m;return l}return j},a.parseExifTag=function(b,c,d,e,f){var g=b.getUint16(d,e);f.exif[g]=a.getExifValue(b,c,d,b.getUint16(d+2,e),b.getUint32(d+4,e),e)},a.parseExifTags=function(a,b,c,d,e){var f,g,h;if(c+6>a.byteLength)return void console.log("Invalid Exif data: Invalid directory offset.");if(f=a.getUint16(c,d),g=c+2+12*f,g+4>a.byteLength)return void console.log("Invalid Exif data: Invalid directory size.");for(h=0;f>h;h+=1)this.parseExifTag(a,b,c+2+12*h,d,e);return a.getUint32(g,d)},a.parseExifData=function(b,c,d,e,f){if(!f.disableExif){var g,h,i,j=c+10;if(1165519206===b.getUint32(c+4)){if(j+8>b.byteLength)return void console.log("Invalid Exif data: Invalid segment size.");if(0!==b.getUint16(c+8))return void console.log("Invalid Exif data: Missing byte alignment offset.");switch(b.getUint16(j)){case 18761:g=!0;break;case 19789:g=!1;break;default:return void console.log("Invalid Exif data: Invalid byte alignment marker.")}if(42!==b.getUint16(j+2,g))return void console.log("Invalid Exif data: Missing TIFF marker.");h=b.getUint32(j+4,g),e.exif=new a.ExifMap,h=a.parseExifTags(b,j,j+h,g,e),h&&!f.disableExifThumbnail&&(i={exif:{}},h=a.parseExifTags(b,j,j+h,g,i),i.exif[513]&&(e.exif.Thumbnail=a.getExifThumbnail(b,j+i.exif[513],i.exif[514]))),e.exif[34665]&&!f.disableExifSub&&a.parseExifTags(b,j,j+e.exif[34665],g,e),e.exif[34853]&&!f.disableExifGps&&a.parseExifTags(b,j,j+e.exif[34853],g,e)}}},a.metaDataParsers.jpeg[65505].push(a.parseExifData)}),function(a){"use strict";"function"==typeof define&&define.amd?define(["load-image","load-image-exif"],a):a(window.loadImage)}(function(a){"use strict";a.ExifMap.prototype.tags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",42240:"Gamma",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"PhotographicSensitivity",34856:"OECF",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:"LensSpecification",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"},a.ExifMap.prototype.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"top-left",2:"top-right",3:"bottom-right",4:"bottom-left",5:"left-top",6:"right-top",7:"right-bottom",8:"left-bottom"}},a.ExifMap.prototype.getText=function(a){var b=this.get(a);switch(a){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[a][b];case"ExifVersion":case"FlashpixVersion":return String.fromCharCode(b[0],b[1],b[2],b[3]);case"ComponentsConfiguration":return this.stringValues[a][b[0]]+this.stringValues[a][b[1]]+this.stringValues[a][b[2]]+this.stringValues[a][b[3]];case"GPSVersionID":return b[0]+"."+b[1]+"."+b[2]+"."+b[3]}return String(b)},function(a){var b,c=a.tags,d=a.map;for(b in c)c.hasOwnProperty(b)&&(d[c[b]]=b)}(a.ExifMap.prototype),a.ExifMap.prototype.getAll=function(){var a,b,c={};for(a in this)this.hasOwnProperty(a)&&(b=this.tags[a],b&&(c[b]=this.getText(b)));return c}});

function ElloImageEditor(facemakerEl, maxWidth) {

  // =========================================================================
  // Image crop to fill helper
  // =========================================================================

  var getOffsetAndSizeToCrop = function( containerW, containerH, imageW, imageH, cropFill ) {
    var ratioW = containerW / imageW;
    var ratioH = containerH / imageH;
    var shorterRatio = ratioW > ratioH ? ratioH : ratioW;
    var longerRatio = ratioW > ratioH ? ratioW : ratioH;
    var ratio = cropFill ? longerRatio : shorterRatio;
    var resizedW = cropFill ? Math.ceil(imageW * longerRatio) : Math.ceil(imageW * shorterRatio);
    var resizedH = cropFill ? Math.ceil(imageH * longerRatio) : Math.ceil(imageH * shorterRatio);
    var offsetX = Math.ceil((containerW - resizedW) * 0.5);
    var offsetY = Math.ceil((containerH - resizedH) * 0.5);
    return [offsetX, offsetY, resizedW, resizedH, ratio];
  };


  // =========================================================================
  // Mobile helpers
  // =========================================================================

  var lockTouchScreen = function( isLocked ) {
    if( isLocked == false ) {
      document.ontouchmove = null;
    } else {
      document.ontouchmove = function( event ) {
        event.preventDefault();
      };
    }
  };


  // =========================================================================
  // Set up PIXI
  // =========================================================================

  var defaultRatio = 5/8;
  var container = facemakerEl.querySelector('.facemaker-canvas-container');
  var pixi = PIXI.autoDetectRenderer(container.clientWidth, container.clientWidth * defaultRatio, null, true, true);
  var stageRatio = pixi.height / pixi.width;
  pixi.backgroundColor = 0x333333;
  container.appendChild(pixi.view);

  // create an new instance of a pixi stage
  var stage = new PIXI.Container();
  stage.interactive = true;

  // resize canvas on window resize
  var resizeToContainerWidth = function() {
    if(pixi.width != facemakerEl.offsetWidth) {
      // pixi.resize(facemakerEl.offsetWidth, Math.round(facemakerEl.offsetWidth * stageRatio));
      scaleSceneOnNewWidth(facemakerEl.offsetWidth);
      updateHandleScale();
      animate();
    }
  };
  window.addEventListener('resize', resizeToContainerWidth);


  // =========================================================================
  // set up Ello logo & drag handles
  // =========================================================================

  // Ello logo ------------------------
  var logoWidth = 0;
  var logoHeight = 0;
  var startRotation = 0;
  var startScale = -1;
  var curScale = 1;
  var scaleDist = -1;

  var texture = PIXI.Texture.fromImage("data:image/png;base64,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");
  var elloLogo = new PIXI.Sprite(texture);
  stage.addChild(elloLogo);
  elloLogo.anchor.x = 0.5;
  elloLogo.anchor.y = 0.5;
  elloLogo.interactive = true;

  // store original image size
  logoWidth = 575;
  logoHeight = 575;

  // scale down initial ello logo size
  var resetElloLogo = function() {
    var ratioW = pixi.width / logoWidth;
    var ratioH = pixi.height / logoWidth;
    var ratio = ratioW > ratioH ? ratioH : ratioW;

    curScale = ratio * 0.5;
    elloLogo.scale.x = elloLogo.scale.y = curScale;
    elloLogo.position.x = pixi.width/2;
    elloLogo.position.y = pixi.height/2;
    elloLogo.rotation = 0;
    if(updateHandleScale != null) updateHandleScale();
  };

  var circleToSquareCorner = function( squareSize ) {
    return (squareSize/2)*(Math.sqrt(2)-1);
  };

  // draggable handles ----------------------------
  var draggingHandle = false;
  var startDragAngle = 999;
  var handles = null;
  var hitAreaSize = 40;
  var handleTexture = PIXI.Texture.fromImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAJ1BMVEUAAAD///////////////////////8AAAD////h4eFdXV0YGBgXFxe90KBrAAAAB3RSTlMA2At4+tMkXBdJcwAAAEVJREFUeNpVjksOADEIQvHXovb+552ms/LtIAQAoBbuYYrLEj5kXV+Y1V1JURjz7MtJGoK1H8WAs3/R9CFGbBSM6jE67nwMywNxF+uOFgAAAABJRU5ErkJggg==");

  var createHandle = function(handleX, handleY) {
    // build handle & set position
    var graphics = new PIXI.Sprite(handleTexture);
    graphics.anchor.x = 0.5;
    graphics.anchor.y = 0.5;
    graphics.position.x = handleX;
    graphics.position.y = handleY;
    elloLogo.addChild( graphics );

    // add hit area rect
    graphics.hitArea = new PIXI.Rectangle( -hitAreaSize/2, -hitAreaSize/2, hitAreaSize, hitAreaSize );
    graphics.interactive = true;

    // add interactivity
    graphics.mousedown = graphics.touchstart = function(e) {
      draggingHandle = true;
    };
    graphics.mouseup = graphics.touchend = function(e) {
      startDragAngle = 999;
      startScale = -1;
      draggingHandle = false;
    };
    graphics.mouseupoutside = graphics.touchendoutside = function(e) {
      startDragAngle = 999;
      startScale = -1;
      draggingHandle = false;
    };

    return graphics;
  };

  // add corner handles
  var handle1 = createHandle(-logoWidth / 2, -logoHeight / 2);
  var handle2 = createHandle(logoWidth / 2, -logoHeight / 2);
  var handle3 = createHandle(logoWidth / 2, logoHeight / 2);
  var handle4 = createHandle(-logoWidth / 2, logoHeight / 2);
  handles = [handle1, handle2, handle3, handle4];

  var showHandles = function(isShowing) {
    for( var i=0; i < handles.length; i++ ) {
      handles[i].visible = isShowing;
    }
  };

  var updateHandleScale = function() {
    for( var i=0; i < handles.length; i++ ) {
      handles[i].scale.x = handles[i].scale.y = 0.8 / elloLogo.scale.x;
    }
  };

  // init ello logo/handles
  resetElloLogo();


  // =========================================================================
  // set up touch/drag
  // =========================================================================

  var startDragX = 0;
  var startDragY = 0;
  var draggingLogo = false;

  elloLogo.mousedown = elloLogo.touchstart = function(e) {
    startDragX = elloLogo.position.x;
    startDragY = elloLogo.position.y;
    draggingLogo = true;
  };
  elloLogo.mouseup = elloLogo.touchend = function(e) {
    draggingLogo = false;
  };
  elloLogo.mouseupoutside = elloLogo.touchendoutside = function(e) {
    draggingLogo = false;
  };

  var dragEvent = function( mouseX, mouseY, mouseMovedX, mouseMovedY ) {
    if( draggingHandle == true ) {
      // handle logo rotation
      if( startDragAngle == 999 ) {
        startDragAngle = MathUtil.getAngleToTarget( mouseX, mouseY, elloLogo.position.x, elloLogo.position.y );
        startRotation = elloLogo.rotation;
      }
      var curDragAngle = MathUtil.getAngleToTarget( mouseX, mouseY, elloLogo.position.x, elloLogo.position.y );
      var angleDelta = startDragAngle - curDragAngle;
      elloLogo.rotation = startRotation - MathUtil.degreesToRadians( angleDelta );
      // handle scale (subtract the distance from the circle radius to the square corner)
      scaleDist = MathUtil.getDistance( mouseX, mouseY, elloLogo.position.x, elloLogo.position.y ) + hitAreaSize/2;
      elloLogo.scale.x = elloLogo.scale.y = scaleDist / ( logoWidth - circleToSquareCorner(logoWidth) );
      updateHandleScale();
    } else if ( draggingLogo == true ) {
      // reposition the logo
      elloLogo.position.x = startDragX + mouseMovedX;
      elloLogo.position.y = startDragY + mouseMovedY;
    } else {
      // scroll the page if dragging in canvas but not on logo or handles
      var touchspeedY = _touchTracker.touchspeed.y;
      requestAnimationFrame(function(){
        window.scrollTo(window.scrollX, window.scrollY - touchspeedY);
      });
    }
  };

  var _touchTracker = new tts.MouseAndTouchTracker( container, function( touchState ){
    switch( touchState ) {
      case tts.MouseAndTouchTracker.state_start :
        play();
        lockTouchScreen(true);
        break;
      case tts.MouseAndTouchTracker.state_move :
        dragEvent( _touchTracker.touchcurrent.x, _touchTracker.touchcurrent.y, _touchTracker.touchmoved.x, _touchTracker.touchmoved.y );
        break;
      case tts.MouseAndTouchTracker.state_end :
        pause();
        lockTouchScreen(false);
        break;
    }
  }, false, 'canvas' );


  // =========================================================================
  // animate
  // =========================================================================

  var _active = false;
  function animate() {
    pixi.render(stage);
    if( _active == true ) requestAnimationFrame( animate );
  }
  setTimeout(function(){ animate(); },500);
  setTimeout(function(){ animate(); },600);

  var pause = function() {
    _active = false;
  };

  var play = function() {
    _active = true;
    requestAnimationFrame(animate);
  };


  // =========================================================================
  // add image drop
  // =========================================================================

  var _canvas = facemakerEl.querySelector('.facemaker-canvas-drop-draw');
  var _fileInput = facemakerEl.querySelector('.file-input');
  var _context = _canvas.getContext("2d");
  var _canvasSource = null;
  var _loadedImageSprite;

  var loadImageToContext = function(image){
    var ratio = pixi.width / image.width;
    var imageRatio = (image.height / image.width);

    // set drawing canvas size based on original, and draw the original in there before we start drawing our own layers
    var canvasWidth = _canvas.width = image.width * ratio;
    var canvasHeight = _canvas.height = image.height * ratio;
    if(canvasWidth < maxWidth) {
      canvasHeight = _canvas.height = maxWidth * imageRatio;
      canvasWidth = _canvas.width = maxWidth;
    }
    _context.drawImage( image, 0, 0, canvasWidth, canvasHeight );

    // set PIXI size to current canvas width
    pixi.resize(pixi.width, pixi.width * imageRatio);
    stageRatio = canvasHeight / canvasWidth;

    // place base64-encoded image into PIXI scene
    if( _loadedImageSprite != null ) stage.removeChild(_loadedImageSprite);
    _loadedImageSprite = PIXI.Sprite.fromImage(_canvas.toDataURL(), false);
    stage.addChild(_loadedImageSprite);
    _loadedImageSprite.anchor.x = 0.5;
    _loadedImageSprite.anchor.y = 0.5;
    _loadedImageSprite.position.x = pixi.width/2;
    _loadedImageSprite.position.y = pixi.height/2;

    // scale to fill
    var cropOffsetArr = getOffsetAndSizeToCrop( container.clientWidth, container.clientHeight, _canvas.width, _canvas.height, true );
    var scale = cropOffsetArr[4];
    _loadedImageSprite.scale.x = _loadedImageSprite.scale.y = scale;

    // keep ello logo on top
    stage.addChild(elloLogo);
    resetElloLogo();

    setTimeout(function(){ animate(); },100);
    setTimeout(function(){ animate(); },200);

    imageEditorDropSuccess();
  };

  // load and draw image
  CanvasUtil.loadImageToContextFromDrop( pixi.view, function( apiFiles ){
    loadImage(
      apiFiles[0],
      function (img) {
        loadImageToContext(img);
      },
      {orientation:true, maxWidth:maxWidth}
    );
    // CanvasUtil.imagesSelected( apiFiles, loadImageToContext );
  });
  CanvasUtil.loadImageToContextFromInput( _fileInput, function( apiFiles ){
    loadImage(
      apiFiles[0],
      function (img) {
        loadImageToContext(img);
      },
      {orientation:true, maxWidth:maxWidth}
    );
    // CanvasUtil.imagesSelected( apiFiles, loadImageToContext );
  });


  // =========================================================================
  // Add image drop responses
  // =========================================================================

  function imageEditorError() {
    facemakerEl.classList.add('facemaker-error');
  }

  function imageEditorDropSuccess() {
    facemakerEl.classList.add('facemaker-has-image');
    facemakerEl.classList.remove('facemaker-error');
  }


  // =========================================================================
  // Export methods
  // =========================================================================

  var checkForEditorError = function() {
    if( _loadedImageSprite == null ) {
      if( imageEditorError != null ) {
        imageEditorError();
        return true;
      } else {
        return false;
      }
    }
  };

  var scaleSceneOnNewWidth = function(newWidth) {
    // scale up canvas
    var newScaleRatio = newWidth / pixi.width;
    pixi.resize(Math.round(pixi.width * newScaleRatio), Math.round(pixi.height * newScaleRatio));

    // move/scale image
    if(_loadedImageSprite != null) {
      _loadedImageSprite.position.x = pixi.width/2;
      _loadedImageSprite.position.y = pixi.height/2;
      // scale to fill
      var cropOffsetArr = getOffsetAndSizeToCrop( container.clientWidth, container.clientHeight, _canvas.width, _canvas.height, true );
      var scale = cropOffsetArr[4];
      _loadedImageSprite.scale.x = _loadedImageSprite.scale.y = scale;
    }

    // move/scale logo
    elloLogo.position.x = elloLogo.position.x * newScaleRatio;
    elloLogo.position.y = elloLogo.position.y * newScaleRatio;
    elloLogo.scale.x = elloLogo.scale.y = elloLogo.scale.x * newScaleRatio;
  };

  var renderPixiToImg = function(toSubmit) {
    // hide handles for export
    showHandles(false);

    // scale up if needed
    var scaledUp = false;
    var curPixiSize = [pixi.width, pixi.height];
    var curImagePos = [_loadedImageSprite.position.x, _loadedImageSprite.position.y];
    var curImageScale = _loadedImageSprite.scale.x;
    var curLogoPos = [elloLogo.position.x, elloLogo.position.y];
    var curLogoScale = elloLogo.scale.x;
    if(pixi.width < maxWidth) {
      scaledUp = true;
      scaleSceneOnNewWidth(maxWidth);
    }

    // render!
    pixi.render(stage);
    var base64img = pixi.view.toDataURL('image/jpeg', 0.95);
    // var base64img = (toSubmit == true) ? pixi.view.toDataURL('image/jpeg', 0.8) : pixi.view.toDataURL('image/png');

    // show handles after export
    showHandles(true);
    // scale back down if needed
    pixi.resize(curPixiSize[0], curPixiSize[1]);
    _loadedImageSprite.position.x = curImagePos[0];
    _loadedImageSprite.position.y = curImagePos[1];
    _loadedImageSprite.scale.x = _loadedImageSprite.scale.y = curImageScale;
    elloLogo.position.x = curLogoPos[0];
    elloLogo.position.y = curLogoPos[1];
    elloLogo.scale.x = elloLogo.scale.y = curLogoScale;

    // return data
    return base64img;
  };

  facemakerEl.querySelector('.facemaker-export-image').addEventListener('click',function(){
    if(checkForEditorError() == true) return;

    var base64img = renderPixiToImg(false);

    if( navigator.userAgent.toLowerCase().match(/firefox/) ) {
      var win = window.open();
      win.document.write("<img src='" + base64img + "'/>");
    } else {
      // add base64 image to save link
      var saveLink = facemakerEl.querySelector('.export-img-save-link');
      saveLink.href = base64img;

      // simulate click on link after setting href
      var clickevent = document.createEvent('Event');
      clickevent.initEvent('click', true, false);
      saveLink.dispatchEvent(clickevent);
    }

    setTimeout(function(){ animate(); },100);
  });

  // =========================================================================
  // Public interface
  // =========================================================================
  return {
    resizeToContainerWidth: resizeToContainerWidth,
    pause: pause,
    play: play
  };
}
;
