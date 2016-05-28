<html>
	<head>
		<title>Disney Chanel</title>
		<link rel="stylesheet" type="text/css" href="../css/style.css">
		<link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="../jquery-1.10.2.min.js"></script>
		<script src="../js/main.js"></script>
		<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
		
	</head>
	<body>
		<p class="test" style="border:1px solid black;margin:5px;">Swipe me in the left direction - do not swipe outside the border!</p>
		<!--- *****************MENU DISNEY DỌC****************** -->
		<div id="Menu_Doc">
			<div class="Menu_Doc_header">
				<div class="input-group">
					<input type="text" placeholder="Search" id="txtsearch_menudoc">
					<button id="btnsearch_menudoc"><i class="fa fa-search"></i></button>
				</div>
			</div>
			<div class="list_menudoc">
				<li><a href="#"><img src="../img/iconDisney.png"> Disney.co.za</a></li>
				<li><a href="#"><img src="../img/iconTV.png"> TV</a></li>
				<li><a href="#"><img src="../img/iconGame.png"> Games</a></li>
				<li><a href="#"><img src="../img/iconCreate.png"> Create</a></li>
				<li><a href="#"><img src="../img/iconMovie.png"> Movies</a></li>
				<li><a href="#"><img src="../img/iconVideo.png"> Video</a></li>
				<li><a href="#"><img src="../img/iconParks.png"> Parks</a></li>
				<li><a href="#"><img src="../img/iconFavourites.png"> Disney Favourites</a></li>
				<li><a href="#" class="footer_menudoc"></a></li>
			</div>
		</div>
		<div class="body_content">
			<!-- *****************HEADER******************* -->
			<div class="header">
				<!-- *****************MENU HEADER******************* -->
				<div class="header_content">
					<div id="component_left">
						<!-- **************SCREEN 1023px*************** -->
						<button id="btnMenuBars">
							<i class="fa fa-bars fa-2x" style="color:white"></i>
						</button>
						<a href="#" id="link_Disney">
							<img src="../img/titleDisney.png" style="margin-top: 0px;">
						</a>
						<!-- **************SCREEN 1025px trở lên*************** -->
						<a href="#" style="margin-left: 20px">Games</a>
						<a href="#">TV</a>
						<a href="#">Movies</a>
						<a href="#">Video</a>
						<a href="#">Parks</a>
					</div>
					<div class="component_right">
						<!-- **************SCREEN 1025px - INPUTGROUP*************** -->
						<div class="input-group" id="inputgroup">
							<input type="text" placeholder="Search" id="txtsearch_menudoc">
							<button id="btnsearch_menudoc" style="margin-left:-4px"><i class="fa fa-search"></i></button>
						</div>
						<!-- **************SCREEN 1023px*************** -->
						<button id="btnSearch_Responsive">
							<i class="fa fa-search fa-2x" style="color:white"></i>
						</button>
					</div>
				</div>
				<div class="header_content">
					<!--- *****************MENU DISNEY NGANG****************** -->
					<div id="btnDisney_menu">
						<div style="width:25%;height:0px">
							<label class="font_btnDisney_menu">Disney.co.za</label>
						</div>
						<div style="margin-left:25%;height:0px">
							<label>Game</label>
						</div>
						<div style="margin-left:50%;height:0px">
							<label>Movies</label>
						</div>
						<div style="margin-left:75%">
							<label>Parks</label>
						</div>
					</div>
					<!-- *****************BUTTON DISNEY******************* -->
					<button id="btnDisney">
						<div style="width:80px;height:0px">
							<img src="../img/titleDisney.png" style="margin-left:7px;margin-top:-9px">
						</div>
						<div style="margin-left:85px">
							<i class="fa fa-chevron-down fa-lg" style="color:#108ff7;margin-left:10px"></i>
						</div>
					</button>
				</div>
				<!-- **************SCREEN 1023px - INPUTGROUP*************** -->
				<div class="input-group" id="inputgroup_1023">
					<span style="padding:12px 0px 12px 10px;background-color:white;margin-top:20px">
						<i class="fa fa-search fa-lg"></i>
					</span>
					<input type="text" placeholder="Search" id="txtsearch_large">
					<button id="btnsearch_cancel" style="margin-left:-4px">CANCEL</button>
				</div>
			</div>
			<div class="content">
				<!-- <div style="height: 1000px"></div> -->
				<!-- *****************SLIDER BAR******************* -->
				<div class="slider_img" style="position: static">
					<div id="myCarousel" class="carousel" data-ride="carousel">
			    <!-- Indicators -->
					    <!-- <ol class="carousel-indicators" id="carousel-indicators">
					      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					      <li data-target="#myCarousel" data-slide-to="1"></li>
					      <li data-target="#myCarousel" data-slide-to="2"></li>
					      <li data-target="#myCarousel" data-slide-to="3"></li>
					    </ol> -->
					    <!-- Wrapper for slides -->
					    <div class="carousel-inner" role="listbox">
					      <div class="item active">
					        <img src="../img/slider/img1.png" alt="Chania">
					      </div>
					      <div class="item">
					        <img src="../img/slider/img2.png" alt="Chania">
					      </div>
					      <div class="item ">
					        <img src="../img/slider/img3.png" alt="Chania">
					      </div>
					      <div class="item ">
					        <img src="../img/slider/img4.png" alt="Chania">
					      </div>
					      <div class="item ">
					        <img src="../img/slider/img5.png" alt="Chania">
					      </div>
					    </div>
					    <!-- Left and right controls -->
					    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev" id="iconleft">
					      <span aria-hidden="true"><img src="../img/iconleft.png"></span>
					      <span class="sr-only">Previous</span>
					    </a>
					    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next" id="iconright">
					      <span aria-hidden="true"><img src="../img/iconright.png"></span>
					      <span class="sr-only">Next</span>
					    </a>
				  	</div>
				</div>
				<!-- *****************WHAT'S NEW******************* -->
				<div class="content_whatnew">
					<div class="body_content_whatnew">
						<div style="height:0px" id="icon_whatnew">
							<img src="../img/icon-whatnew.png">
						</div>
						<div style="margin-left:58px;margin-top:-6px">
							<span>What's New</span>
							<p style="font-size:17px">The latest games, apps and videos</p>
						</div>
						<div class="component_whatnew imgfist">
							<div class="component_whatnew_img">
								<img src="../img/whatnew/img1.png">
							</div>
							<a href="#" class="name_game">Houst of Haunts</a>
							<p>Find your way out of the spooktacular Monstober mansion!</p>
						</div>
						<div class="component_whatnew">
							<div class="component_whatnew_img">
								<img src="../img/whatnew/img2.png">
							</div>
							<a href="#" class="name_game">Join Forces</a>
							<p>Disney Infinity 3.0: Play Without Limits available now!</p>
						</div>
					</div>
				</div>
				<!-- *****************VIDEOS******************* -->
				<div class="content_videos">
					<div class="body_content_videos">
						<div class="title_videos">
							<div style="height:0px" id="icon_videos">
								<img src="../img/iconVideos.png">
							</div>
							<div style="margin-left:58px;margin-top:-6px">
								<span>Videos</span> 
								<label>See More</label>
								<p>Watch the latest clips, trailers and more!</p>
							</div>
						</div>
						
						<!-- Left Controls -->
						<div class="left_video">
							<button id="left-controls"><img src="../img/iconleft.png"></button>
						</div>
						<div class="component_videos">
							<!-- Video 1 -->
							<div class="videos first" id="video_1">
								<div class="videos_img">
									<img src="../img/Videos/img1.png" id="img_video1">
								</div>
								<a href="#" class="name_video" id="name_video1">
									Guardians Of The Galaxy - Starlord Part 1
								</a>
							</div>
							<!-- Video 2 -->
							<div class="videos first" id="video_2">
								<div class="videos_img">
									<img src="../img/Videos/img2.png" id="img_video2">
								</div>
								<a href="#" class="name_video" id="name_video2">
									Descendants | DIY Accessorised Tutorials - Collar
								</a>
								<p>Descendants</p>
							</div>
							<!-- Video 3 -->
							<div class="videos" id="video_3">
								<div class="videos_img">
									<img src="../img/Videos/img3.png" id="img_video3">
								</div>
								<a href="#" class="name_video" id="name_video3">
									Descendants | DIY Accessorised Tutorials - Pearl
								</a>
								<p>Descendants</p>
							</div>
							<!-- Video 4 -->
							<div class="videos" id="video_4">
								<div class="videos_img">
									<img src="../img/Videos/img4.png" id="img_video4">
								</div>
								<a href="#" class="name_video" id="name_video4">
									Star Wars: Episode VII The Force Awakens
								</a>
							</div>
							<!-- Video 5 -->
							<div class="videos" id="video_5">
								<div class="videos_img">
									<img src="../img/Videos/img5.png" id="img_video4">
								</div>
								<a href="#" class="name_video" id="name_video4">
									Descendants | DIY Accessorised Tutorials - Pearl
								</a>
								<p>Descendants</p>
							</div>
							<!-- Video 6 -->
							<div class="videos" id="video_6">
								<div class="videos_img">
									<img src="../img/Videos/img6.png" id="img_video4">
								</div>
								<a href="#" class="name_video" id="name_video4">
									Descendants | DIY Accessorised Tutorials - Pearl
								</a>
								<p>Descendants</p>
							</div>
						</div>
						<!-- Right Controls -->
						<div class="right_video">
							<button id="right-controls"><img src="../img/iconright.png"></button>
						</div>
					</div>
				</div>
				<div id="test"></div>
			</div>
			<div class="footer"></div>

		<img src="../img/27e6.gif" title="Dự báo thời tiết - Thủ đô Hà Nội" height="41" width="127">
		</div>
	</body>
</html>