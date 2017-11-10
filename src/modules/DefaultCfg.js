/* ==[ DefaultCfg.js ]========================================================================================
                                                DEFAULT CONFIG
=========================================================================================================== */

const defaultCfg = {
	disabled     : 0,    // Dollchan enabled by default
	language     : 0,    // Dollchan language [0=ru, 1=en]
	hideBySpell  : 1,    // hide posts by spells
	spells       : null, // user defined spells
	sortSpells   : 0,    // sort spells and remove duplicates
	menuHiddBtn  : 1,    // extra options for "Hide" buttons
	hideRefPsts  : 0,    // hide replies to hidden posts
	delHiddPost  : 0,    // remove placeholders [0=off, 1=all, 2=posts only, 3=threads only]
	ajaxUpdThr   : 1,    // threads updater
	updThrDelay  : 20,   //    update interval (sec)
	updCount     : 1,    //    show countdown to thread update
	favIcoBlink  : 0,    //    blink the favicon on new posts
	desktNotif   : 0,    //    desktop notifications for new posts
	noErrInTitle : 0,    //    don't show error code in title (except 404)
	markNewPosts : 1,    //    highlight new posts with color
	useDobrAPI   : 1,    //    dobrochan: use json API
	markMyPosts  : 1,    // highlight my own posts
	hideReplies  : 0,    // show only op-posts in threads list
	expandTrunc  : 0,    // auto-expand truncated posts
	updThrBtns   : 1,    // show "Get new posts" buttons in threads list
	showHideBtn  : 1,    // show "Hide" buttons
	showRepBtn   : 1,    // show "Quick reply" buttons
	postBtnsCSS  : 1,    // post buttons style [0=simple, 1=gradient grey, 2=custom]
	postBtnsBack : '#8c8c8c', //    custom background color
	noSpoilers   : 1,    // text spoilers expansion [0=off, 1=grey, 2=native]
	noPostNames  : 0,    // hide poster names
	widePosts    : 0,    // stretch posts to screen width
	correctTime  : 0,    // time correction in posts
	timeOffset   : '+0', //    time offset (h)
	timePattern  : '',   //    search pattern
	timeRPattern : '',   //    replace pattern
	expandImgs   : 2,    // expand images on click [0=off, 1=in post, 2=by center]
	imgNavBtns   : 1,    //    add buttons to navigate images
	imgInfoLink  : 1,    //    show name under expanded image
	resizeDPI    : 0,    //    don't upscale images on high DPI displays
	resizeImgs   : 1,    //    resize large images to fit screen
	minImgSize   : 100,  //    minimal size for expanded images (px)
	zoomFactor   : 25,   //    images zoom sensibility [1-100%]
	webmControl  : 1,    //    show control bar for WebM
	webmTitles   : 0,    //    load titles from WebM metadata
	webmVolume   : 100,  //    default volume for WebM [0-100%]
	minWebmWidth : 320,  //    minimal width for WebM (px)
	preLoadImgs  : 0,    // preload images
	findImgFile  : 0,    //    detect embedded files in images
	openImgs     : 0,    // replace thumbs with original images [0=off, 1=all, 2=GIFs only, 3=non-GIFs]
	imgSrcBtns   : 1,    // add "Search" buttons for images
	delImgNames  : 0,    // hide filenames
	maskImgs     : 0,    // NSFW mode
	maskVisib    : 7,    // image opacity in NSFW mode [0-100%]
	linksNavig   : 1,    // posts navigation by >>links
	linksOver    : 100,  //    delay appearance (ms)
	linksOut     : 1500, //    delay disappearance (ms)
	markViewed   : 0,    //    mark viewed posts
	strikeHidd   : 0,    //    strike >>links to hidden posts
	removeHidd   : 0,    //        also remove from reply maps
	noNavigHidd  : 0,    //    don't show previews for hidden posts
	markMyLinks  : 1,    // mark links to my posts with (You)
	crossLinks   : 0,    // replace http:// with >>/b/links*
	decodeLinks  : 0,    // decode %D0%A5%D1 in links
	insertNum    : 1,    // insert >>link on №postnumber click*
	addOPLink    : 0,    // insert >>link when replying to OP on board
	addImgs      : 0,    // load images to jpg/png/gif links*
	addMP3       : 1,    // embed mp3 links
	addVocaroo   : 1,    // embed Vocaroo links
	addYouTube   : 3,    // embed YouTube links [0=off, 1=onclick, 2=player, 3=preview+player, 4=preview]
	YTubeType    : 0,    //    player type [0=flash, 1=HTML5]
	YTubeWidth   : 360,  //    player width (px)
	YTubeHeigh   : 270,  //    player height (px)
	YTubeTitles  : 0,    //    load titles for YouTube links
	ytApiKey     : '',   //    YouTube API key
	addVimeo     : 1,    //    embed Vimeo links
	ajaxPosting  : 1,    // posting without refresh
	postSameImg  : 1,    //    ability to post duplicate images
	removeEXIF   : 1,    //    remove EXIF from JPEG
	removeFName  : 0,    //    clear file names
	sendErrNotif : 1,    //    inform in title about post send error
	scrAfterRep  : 0,    //    scroll to bottom after reply
	fileInputs   : 2,    //    enhanced file attachment field  [0=off, 1=simple, 2=preview]
	addPostForm  : 2,    // reply form display in thread [0=at top, 1=at bottom, 2=hidden]
	spacedQuote  : 1,    // insert a space when quoting "> "
	favOnReply   : 1,    // add thread to favorites after reply
	warnSubjTrip : 0,    // warn about a tripcode in "Subject" field
	addSageBtn   : 1,    // replace "Email" with Sage button
	saveSage     : 1,    // remember sage
	sageReply    : 0,    //    reply with sage
	cap4chanAlt  : 1,    // 4chan: use alternative captcha
	capUpdTime   : 300,  // captcha update interval (sec)
	captchaLang  : 1,    // forced captcha input language [0=off, 1=en, 2=ru]
	addTextBtns  : 1,    // text markup buttons [0=off, 1=graphics, 2=text, 3=usual]
	txtBtnsLoc   : 1,    //    located at [0=top, 1=bottom]
	passwValue   : '',   // user password value
	userName     : 0,    // user name
	nameValue    : '',   //    value
	noBoardRule  : 1,    // hide board rules
	noPassword   : 1,    // hide form "Password" field
	noName       : 0,    // hide form "Name" field
	noSubj       : 0,    // hide form "Subject" field
	scriptStyle  : 0,    /* Dollchan style
		[0=Gradient darkblue, 1=gradient blue, 2=solid grey, 3=transparent blue, 4=square dark] */
	userCSS      : 0,    // user CSS
	userCSSTxt   : '',   //    css text
	expandPanel  : 0,    // show full main panel
	panelCounter : 1,    // panel counter for posts/images [0=off, 1=all posts, 2=except hidden]
	rePageTitle  : 1,    // show thread title in the page tab
	animation    : 1,    // CSS3 animation
	closePopups  : 0,    // close popups automatically
	inftyScroll  : 1,    // infinite scrolling for pages
	scrollToTop  : 0,    // always scroll to top in the threads list
	hotKeys      : 1,    // hotkeys
	loadPages    : 1,    //    number of pages that are loaded on F5
	updScript    : 1,    // auto check for Dollchan updates
	scrUpdIntrv  : 1,    //    interval in days (every val+1 day)
	turnOff      : 0,    // enable Dollchan only on this site
	textaWidth   : 300,  // textarea width (px)
	textaHeight  : 115,  // textarea height (px)
	replyWinDrag : 0,          // draggable "Quick Reply" form
	replyWinX    : 'right: 0', //    "Quick Reply" form X position
	replyWinY    : 'top: 0',   //    "Quick Reply" form Y position
	cfgTab       : 'filters',  // remembered tab in "Settings" window
	cfgWinDrag   : 0,          // draggable "Settings" window
	cfgWinX      : 'right: 0', //    "Settings" window X position
	cfgWinY      : 'top: 0',   //    "Settings" window Y position
	hidWinDrag   : 0,          // draggable "Hidden" window
	hidWinX      : 'right: 0', //    "Hidden" window X position
	hidWinY      : 'top: 0',   //    "Hidden" window Y position
	favWinDrag   : 0,          // draggable "Favorites" window
	favWinX      : 'right: 0', //    "Favorites" window X position
	favWinY      : 'top: 0',   //    "Favorites" window Y position
	favWinWidth  : 500,        //    "Favorites" window width (px)
	vidWinDrag   : 0,          // draggable "Video" window
	vidWinX      : 'right: 0', //    "Video" window X position
	vidWinY      : 'top: 0'    //    "Video" window Y position
};