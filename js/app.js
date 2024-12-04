//1 - РІРЅРёР·, -1 -РЅР°РІРµСЂС…
var last_scroll_direction = "1";
var changing_last_scroll_direction_in_progress = false;

var menu_section_change_in_progress = false;

var parted_video_player_in_progress = false;
var parted_video_player_interval;
var parted_video_player_start_time = null;

var video_finish_checker_interval;

var initiate_section_leave = false;

var bespoke_gallery_slides = {
	black: {
		1: {
			title: "Modern classic",
			text: "Jet Black solid paint in a gloss finish. Black anodised aluminium brightwork. Black gloss VS wheels with black gloss aero-discs.",
			text_hidden: "Jet Black solid paint in a gloss finish. Black anodised aluminium brightwork. Black gloss VS wheels with black gloss aero-discs.",
			image: "/uploads/slider/black/1.jpg",
		},
		2: {
			title: "Modern classic",
			text: "Jet Black solid paint in a gloss finish. Black anodised aluminium brightwork. Black gloss VS wheels with black gloss aero-discs.",
			text_hidden: "Jet Black solid paint in a gloss finish. Black anodised aluminium brightwork. Black gloss VS wheels with black gloss aero-discs.",
			image: "/uploads/slider/black/2.jpg",
		},
		3: {
			title: "Modern classic",
			text: "Perlino White Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and anthracite anodised aluminium brightwork.",
			text_hidden: "Perlino White Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and anthracite anodised aluminium brightwork.",
			image: "/uploads/slider/black/3.jpg",
		},
		4: {
			title: "Modern classic",
			text: "Perlino White Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and anthracite anodised aluminium brightwork.",
			text_hidden: "Perlino White Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and anthracite anodised aluminium brightwork.",
			image: "/uploads/slider/black/4.jpg",
		},
	},
	white: {
		1: {
			title: "Modern classic",
			text: "Bonneville White pearl paint in a gloss finish with black satin front and rear panels. Black anodised aluminium brightwork. Black satin VS five-spoke wheels with silver brake calipers.",
			text_hidden: "Murgese Black Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/white/1.jpg",
		},
		2: {
			title: "Modern classic",
			text: "Bonneville White pearl paint in a gloss finish with black satin front and rear panels. Black anodised aluminium brightwork. Black satin VS five-spoke wheels with silver brake calipers.",
			text_hidden: "Murgese Black Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/white/2.jpg",
		},
		3: {
			title: "Modern classic",
			text: "Murgese Black Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			text_hidden: "Murgese Black Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/white/3.jpg",
		},
		4: {
			title: "Modern classic",
			text: "Murgese Black Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			text_hidden: "Murgese Black Pebble Grain leather with ribbed seats and tonal stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/white/4.jpg",
		},
	},
	blue: {
		1: {
			title: "Dynamic",
			text: "Kyanite Blue paint in a satin finish with black satin front and rear panels. Anthracite anodised aluminium brightwork. Anthracite satin VS wheels with anthracite satin aero-discs.",
			text_hidden: "Camarillo White Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Anthracite anodised aluminium brightwork.",
			image: "/uploads/slider/blue/1.jpg",
		},
		2: {
			title: "Dynamic",
			text: "Kyanite Blue paint in a satin finish with black satin front and rear panels. Anthracite anodised aluminium brightwork. Anthracite satin VS wheels with anthracite satin aero-discs.",
			text_hidden: "Camarillo White Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Anthracite anodised aluminium brightwork.",
			image: "/uploads/slider/blue/2.jpg",
		},
		3: {
			title: "Dynamic",
			text: "Camarillo White Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Anthracite anodised aluminium brightwork.",
			text_hidden: "Camarillo White Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Anthracite anodised aluminium brightwork.",
			image: "/uploads/slider/blue/3.jpg",
		},
		4: {
			title: "Dynamic",
			text: "Camarillo White Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Anthracite anodised aluminium brightwork.",
			text_hidden: "Camarillo White Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Anthracite anodised aluminium brightwork.",
			image: "/uploads/slider/blue/4.jpg",
		},
	},
	gold: {
		1: {
			title: "Dynamic",
			text: "Canyon Gold paint in a satin finish with black satin front and rear panels. Black anodised aluminium brightwork. Black satin XS ten-spoke wheels.",
			text_hidden: "Onyx Black Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/gold/1.jpg",
		},
		2: {
			title: "Dynamic",
			text: "Canyon Gold paint in a satin finish with black satin front and rear panels. Black anodised aluminium brightwork. Black satin XS ten-spoke wheels.",
			text_hidden: "Onyx Black Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/gold/2.jpg",
		},
		3: {
			title: "Dynamic",
			text: "Onyx Black Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			text_hidden: "Onyx Black Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/gold/3.jpg",
		},
		4: {
			title: "Dynamic",
			text: "Onyx Black Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			text_hidden: "Onyx Black Semi Aniline leather with no decorative stitching. Black Alcantara headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/gold/4.jpg",
		},
	},
	red: {
		1: {
			title: "Lux",
			text: "Garnet Red paint in a gloss finish. Champagne anodised aluminium brightwork. Black satin XS ten-spoke wheels with champagne brake calipers.",
			text_hidden: "Amaranth Red Semi Aniline Leather with tonal stitching. Black leather headliner. Black and champagne anodised aluminium brightwork.",
			image: "/uploads/slider/red/1.jpg",
		},
		2: {
			title: "Lux",
			text: "Garnet Red paint in a gloss finish. Champagne anodised aluminium brightwork. Black satin XS ten-spoke wheels with champagne brake calipers.",
			text_hidden: "Amaranth Red Semi Aniline Leather with tonal stitching. Black leather headliner. Black and champagne anodised aluminium brightwork.",
			image: "/uploads/slider/red/2.jpg",
		},
		3: {
			title: "Lux",
			text: "Amaranth Red Semi Aniline Leather with tonal stitching. Black leather headliner. Black and champagne anodised aluminium brightwork.",
			text_hidden: "Amaranth Red Semi Aniline Leather with tonal stitching. Black leather headliner. Black and champagne anodised aluminium brightwork.",
			image: "/uploads/slider/red/3.jpg",
		},
		4: {
			title: "Lux",
			text: "Amaranth Red Semi Aniline Leather with tonal stitching. Black leather headliner. Black and champagne anodised aluminium brightwork.",
			text_hidden: "Amaranth Red Semi Aniline Leather with tonal stitching. Black leather headliner. Black and champagne anodised aluminium brightwork.",
			image: "/uploads/slider/red/4.jpg",
		},
	},
	silver: {
		1: {
			title: "Lux",
			text: "Cerulean Silver paint in a gloss finish. Champagne anodised aluminium brightwork. Silver SD wheels with champagne brake calipers.",
			text_hidden: "Aurora Blue Semi Aniline leather with tonal stitching. Black leather headliner. Anthracite and champagne anodised aluminium brightwork.",
			image: "/uploads/slider/silver/1.jpg",
		},
		2: {
			title: "Lux",
			text: "Cerulean Silver paint in a gloss finish. Champagne anodised aluminium brightwork. Silver SD wheels with champagne brake calipers.",
			text_hidden: "Aurora Blue Semi Aniline leather with tonal stitching. Black leather headliner. Anthracite and champagne anodised aluminium brightwork.",
			image: "/uploads/slider/silver/2.jpg",
		},
		3: {
			title: "Lux",
			text: "Aurora Blue Semi Aniline leather with tonal stitching. Black leather headliner. Anthracite and champagne anodised aluminium brightwork. ",
			text_hidden: "Aurora Blue Semi Aniline leather with tonal stitching. Black leather headliner. Anthracite and champagne anodised aluminium brightwork.",
			image: "/uploads/slider/silver/3.jpg",
		},
		4: {
			title: "Lux",
			text: "Aurora Blue Semi Aniline leather with tonal stitching. Black leather headliner. Anthracite and champagne anodised aluminium brightwork. ",
			text_hidden: "Aurora Blue Semi Aniline leather with tonal stitching. Black leather headliner. Anthracite and champagne anodised aluminium brightwork.",
			image: "/uploads/slider/silver/4.jpg",
		},
	},
	metal: {
		1: {
			title: "Thoroughbred",
			text: "Liquid Silver paint in a gloss finish. Anthracite anodised aluminium brightwork. Anthracite SD wheels with copper brake calipers.",
			text_hidden: "Black Bay Full Aniline leather with tonal stitching. Black leather headliner. Anthracite and copper anodised aluminium brightwork.",
			image: "/uploads/slider/metal/1.jpg",
		},
		2: {
			title: "Thoroughbred",
			text: "Liquid Silver paint in a gloss finish. Anthracite anodised aluminium brightwork. Anthracite SD wheels with copper brake calipers.",
			text_hidden: "Black Bay Full Aniline leather with tonal stitching. Black leather headliner. Anthracite and copper anodised aluminium brightwork.",
			image: "/uploads/slider/metal/2.jpg",
		},
		3: {
			title: "Thoroughbred",
			text: "Black Bay Full Aniline leather with tonal stitching. Black leather headliner. Anthracite and copper anodised aluminium brightwork.",
			text_hidden: "Black Bay Full Aniline leather with tonal stitching. Black leather headliner. Anthracite and copper anodised aluminium brightwork.",
			image: "/uploads/slider/metal/3.jpg",
		},
		4: {
			title: "Thoroughbred",
			text: "Black Bay Full Aniline leather with tonal stitching. Black leather headliner. Anthracite and copper anodised aluminium brightwork.",
			text_hidden: "Black Bay Full Aniline leather with tonal stitching. Black leather headliner. Anthracite and copper anodised aluminium brightwork.",
			image: "/uploads/slider/metal/4.jpg",
		},
	},
	green: {
		1: {
			title: "Thoroughbred",
			text: "Heritage Green paint in a gloss finish. Black anodised aluminium brightwork. Black VT wheels with a silver rim detail.",
			text_hidden: "Chestnut Tan Full Aniline leather with tonal stitching. Black leather headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/green/1.jpg",
		},
		2: {
			title: "Thoroughbred",
			text: "Heritage Green paint in a gloss finish. Black anodised aluminium brightwork. Black VT wheels with a silver rim detail.",
			text_hidden: "Chestnut Tan Full Aniline leather with tonal stitching. Black leather headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/green/2.jpg",
		},
		3: {
			title: "Thoroughbred",
			text: "Chestnut Tan Full Aniline leather with tonal stitching. Black leather headliner. Black and silver anodised aluminium brightwork.",
			text_hidden: "Chestnut Tan Full Aniline leather with tonal stitching. Black leather headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/green/3.jpg",
		},
		4: {
			title: "Thoroughbred",
			text: "Chestnut Tan Full Aniline leather with tonal stitching. Black leather headliner. Black and silver anodised aluminium brightwork.",
			text_hidden: "Chestnut Tan Full Aniline leather with tonal stitching. Black leather headliner. Black and silver anodised aluminium brightwork.",
			image: "/uploads/slider/green/4.jpg",
		},
	},
};

//РџСЂРёРЅСѓРґРёС‚РµР»СЊРЅРѕ Р·Р°РїСѓСЃРєР°РµРј Р·Р°РіСЂСѓР·РєСѓ РІРёРґРµРѕ РїРѕР±РѕС‡РЅС‹С… СЌС‚Р°Р¶РµР№ (mobile ios hacky bug fix)
/*
if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
	const total_dual_videos = $('.fp-section *[data-video-container="original"] video').length;
	    
	if (total_dual_videos > 0) {
		$('section *[data-video-container="original"] video').each(function(index) {
			const video = $(this).get(0);
			const video_mirrowed = $(this).closest('section').find('*[data-video-container="reverse"] video').get(0);

			//if (video.readyState == 0) {
				video.load();
				video.pause(); 
				video_mirrowed.load();
				video_mirrowed.pause();
			//}
		});
	}
}
*/

$(document).ready(function () {
	document.querySelectorAll(".js-select").forEach((select) => new Choices(select, {
		classNames: {
			containerOuter: "choices select",
			containerInner: "choices__inner select__inner"
		},
		itemSelectText: "",
		searchEnabled: false,
		shouldSort: false,
	}));

	$('#reserve-action-form input[name="phone"]').intlTelInput({
		initialCountry: "us",
		allowDropdown: false,
	});

	$(".js-inputPhone").each(function () {
		$(this).intlTelInput({
			allowDropdown: false,
			initialCountry: "us",
		});

		$(this).on("focus", function () {
			if (!this.value) {
				this.value = "+1";
			}
		})

		$(this).on("blur", function () {
			if (this.value === "+1") {
				this.value = "";
			}
		})
	});


	const loadingForm = (state, form) => {
		form.querySelectorAll(".content-form").forEach((item) => item.style.opacity = state ? 0.5 : 1);
		form.querySelector(".js-formButtonSubmit .text").style.opacity = state ? 0 : 1;
		form.querySelector(".js-formButtonSubmit .loader").style.opacity = state ? "block" : "none";
		form.querySelector(".js-formButtonSubmit .loader").classList.toggle("rotate");
		form.querySelector(".js-formFieldset").toggleAttribute("disabled")
	};

	$("#fullpage").fullpage({
		css3: false,
		scrollBar: false,
		autoScrolling: true,
		controlArrows: true,
		sectionSelector: "*[data-section]",
		touchSensitivity: 4,
		//dragAndMove: 'fingersonly',
		//parallax: true,
		fadingEffect: false,
		lazyLoading: true,
		scrollOverflow: true,
		slidesNavigation: true,
		scrollOverflowOptions: {
			probeType: 3,
		},
		afterRender: function () {
			$("#app").addClass("ready");

			//РџРѕСЃР»Рµ РёРЅРёС†РёР°Р»РёР·Р°С†РёРё fullpage РІРµС€Р°РµРј СЃРѕР±С‹С‚РёРµ РЅР° РІСЃРµ СЃРєСЂРѕР»Р»СЏС‰РёРµСЃСЏ СЃРµРєС†РёРё, РґР»СЏ РѕС‚СЃР»РµР¶РёРІР°РЅРёСЏ % РїСЂРѕРєСЂСѓС‚РєРё
			$(".fp-section .fp-scrollable").each(function () {
				var iscroll = $(this).data("iscrollInstance");

				if (iscroll && typeof iscroll !== undefined) {
					var iscroll_speed = $(this)
						.closest("section")
						.attr("data-scroll-speed");

					if (iscroll_speed && typeof iscroll_speed !== undefined) {
						iscroll.options["mouseWheelSpeed"] = iscroll_speed;
					}

					iscroll.on("scroll", sectionScrollEvent);
					iscroll.on("scrollEnd", sectionScrollEndEvent);
				}
			});

			//Р—Р°РїСѓСЃРєР°РµРј РЅРµР·Р°РІРёСЃРёРјРѕРµ РѕС‚ СЃРєСЂРѕР»Р»Р° РІРёРґРµРѕ РґР»СЏ РїРµСЂРІРѕРіРѕ СЌС‚Р°Р¶Р° РїСЂРё Р·Р°РїСѓСЃРєРµ РїСЂРёР»РѕР¶РµРЅРёСЏ (РµСЃР»Рё С‚Р°РєРѕРµ РІРёРґРµРѕ РµСЃС‚СЊ)
			$(".fp-section").eq(0).find("video.skip-level-pause").trigger("play");

			const section_id = $(".fp-section.active").attr("id");

			let timeout_section_id;
			let timeout_video_part;
			let timeout_video_part_index;

			//Р•СЃР»Рё СЃРїСѓСЃС‚СЏ РІСЂРµРјСЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РЅРµ РїСЂРѕСЏРІРёР» Р°РєС‚РёРІРЅРѕСЃС‚СЊ - Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё СЃРјРµРЅСЏРµРј РїРµСЂРІС‹Р№ СЃР»Р°Р№Рґ РґР»СЏ Р·Р°РґР°РЅРЅС‹С… СЃРµРєС†РёР№
			switch (section_id) {
				case "vision-statement":
					setTimeout(function () {
						timeout_section_id = $(".fp-section.active").attr("id");

						if (timeout_section_id == "vision-statement") {
							timeout_video_part = $(
								".fp-section.active *[data-video-parts] > *[data-video-part].ready"
							).last();
							timeout_video_part_index =
								$(
									".fp-section.active *[data-video-parts] > *[data-video-part]"
								).index(timeout_video_part) + 1;

							if (timeout_video_part_index == 1) {
								playVideoToPart(timeout_section_id, 2);
							}
						}
					}, 1500);

					break;
			}
		},
		afterLoad: function () {
			const section_id = $(".fp-section.active").attr("id");
			const iscroll = $(".fp-section.active .fp-scrollable").data(
				"iscrollInstance"
			);

			let scrolled_percentage = 0;

			//Р•СЃР»Рё Сѓ СЃРµРєС†РёРё РµСЃС‚СЊ РїРѕР»РѕСЃРєР° РїСЂРѕРєСЂСѓС‚РєРё - Р°РЅРёРјРёСЂСѓРµРј СЌР»РµРјРµРЅС‚С‹, РёСЃС…РѕРґСЏ РѕС‚ % РїСЂРѕРєСЂСѓС‡РµРЅРЅРѕРіРѕ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ
			if (iscroll && typeof iscroll !== undefined) {
				scrolled_percentage = iscroll.y / iscroll.maxScrollY;
			}

			//Р•СЃР»Рё Сѓ СЃРµРєС†РёРё РµСЃС‚СЊ РІРёРґРµРѕ, СЂР°Р·Р±РёС‚РѕРµ РЅР° С‡Р°СЃС‚Рё, С‚Рѕ РѕС‚РѕР±СЂР°Р¶Р°РµРј СЌР»РµРјРµРЅС‚С‹ РµРіРѕ РјРµС‚РѕРґРѕРј, РёРЅР°С‡Рµ РѕР±С‹С‡РЅС‹Рј
			const active_video_part = $(
				".fp-section.active *[data-video-parts] > *[data-video-part].ready"
			).last();

			if (active_video_part.length > 0) {
				const active_video_part_index =
					$(
						".fp-section.active *[data-video-parts] > *[data-video-part]"
					).index(active_video_part) + 1;

				animatePartedElements(section_id, active_video_part_index);
			} else {
				animateElements(section_id, scrolled_percentage);
			}
			menuSectionsUpdate(section_id);
		},
		onLeave: function (index, nextIndex, direction) {
			let ready_to_leave = true;
			const active_video_part = $(
				".fp-section.active *[data-video-parts] > *[data-video-part].ready"
			).last();

			//РћРіСЂР°РЅРёС‡РµРЅРёРµ РЅР° РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Р№ % РїСЂРѕСЃРјРѕС‚СЂРµРЅРЅРѕРіРѕ РІРёРґРµРѕ СЂР°Р±РѕС‚Р°РµС‚ С‚РѕР»СЊРєРѕ РґР»СЏ РІРёРґРµРѕ СЃРѕ СЃРєСЂРѕР»Р»РѕРј
			if (active_video_part.length == 0) {
				let video;

				if (direction == "down") {
					video = $(
						'.fp-section.active *[data-video-container="original"] video'
					).get(0);
				} else {
					video = $(
						'.fp-section.active *[data-video-container="reverse"] video'
					).get(0);
				}

				//РџСЂРѕРІРµСЂСЏРµРј, РґРѕРєСЂСѓС‚РёР»РѕСЃСЊ Р»Рё РІРёРґРµРѕ РґРѕ РєРѕРЅС†Р°
				if (video && typeof video !== undefined) {
					const almost_ready = (video.currentTime / video.duration) * 100;
					let min_percentage_video_showed = $(".fp-section.active").attr(
						"data-min-percentage-video-showed-to-leave"
					);

					if (
						!(
							min_percentage_video_showed &&
							typeof min_percentage_video_showed !== undefined
						)
					) {
						min_percentage_video_showed = 95;
					}

					//Р’РѕР·РјРѕР¶РЅРѕ, РІС‹РЅРµСЃС‚Рё РѕРїС†РёСЋ РІ РґР°С‚Р°-РїР°СЂР°РјРµС‚СЂ СЃРµРєС†РёРё
					//Р•СЃР»Рё РµС‰Рµ Р±РѕР»СЊС€Рµ 5% - Р·Р°СЃС‚Р°РІР»СЏРµРј СЃРєСЂРѕР»Р»РёС‚СЊ
					if (almost_ready < min_percentage_video_showed) {
						ready_to_leave = false;
					}
				}
			}

			if (
				$("html").hasClass("hide-ui-md") &&
				(window.matchMedia("(max-height:899px)").matches ||
					window.matchMedia("(max-width:767px)").matches)
			) {
				return false;
			}

			if (
				(!ready_to_leave || parted_video_player_in_progress) &&
				!menu_section_change_in_progress
			) {
				return false;
			} else {
				pauseVideos();

				//РџСЂРё РїРµСЂРµС…РѕРґРµ С‡РµСЂРµР· РјРµРЅСЋ РёРЅРёС†РёР°Р»РёР·РёСЂСѓРµС‚СЃСЏ refreshSectionsOnLeave РґР»СЏ РІСЃРµС… СЃРµРєС†РёР№, РїРѕСЌС‚РѕРјСѓ РІС‹Р·С‹РІР°С‚СЊ РµРіРѕ РїРѕРІС‚РѕСЂРЅРѕ РЅРµС‚ СЃРјС‹СЃР»Р°
				if (!menu_section_change_in_progress) {
					refreshSectionsOnLeave(nextIndex);
				} else {
					menu_section_change_in_progress = false;
				}

				//Р’РєР»СЋС‡Р°РµРј РЅРѕРІС‹Р№ РїСѓРЅРєС‚ РјРµРЅСЋ
				const next_section_id = $(".fp-section")
					.eq(nextIndex - 1)
					.attr("id");

				if (!initiate_section_leave) {
					initiate_section_leave = true;

					$("html").addClass("user-make-action");
				}

				if ($(".fp-section.active").attr("id") == "gallery") {
					setTimeout(function () {
						$("#gallery").removeClass("play-mobile-animation");
					}, 500);
				}

				if (next_section_id == "gallery") {
					$("#gallery").addClass("play-mobile-animation");
				}

				menuSectionsUpdate(next_section_id);
			}
		},
		customMouseWheelHandler: function ([defaultHandler, type]) {
			sectionScrollHandler(defaultHandler, type);
		},
		customKeyDownHandler: function ([defaultHandler, type]) {
			sectionScrollHandler(defaultHandler, type);
		},
		customTouchMoveHandler: function ([defaultHandler, type]) {
			sectionScrollHandler(defaultHandler, type);
		},
	});

	//РњР°РЅСѓР°Р»СЊРЅС‹Р№ РІС‹Р±РѕСЂ СЃРµРєС†РёРё СЃС‚РѕСЂРёСЃР° (РґРѕСЃС‚СѓРїРЅС‹ С‚РѕР»СЊРєРѕ РґР»СЏ СѓР¶Рµ РїСЂРѕСЃРјРѕС‚СЂРµРЅРЅС‹С…)
	$(".fp-slidesNav a").on("click", function (e) {
		$(".fp-slidesNav a").removeClass("active");
		$(this).addClass("active");
	});

	$("*[data-video-parts] > *[data-video-part]").on("click", function (e) {
		e.preventDefault();

		//РќРµ РґР°РµРј РїРµСЂРµРєР»СЋС‡Р°С‚СЊ СЃС†РµРЅС‹, РµСЃР»Рё РІРёРґРµРѕ РІ РїСЂРѕС†РµСЃСЃРµ РїСЂРѕРёРіСЂС‹РІР°РЅРёСЏ
		if (!parted_video_player_in_progress) {
			const section_id = $(".fp-section.active").attr("id");

			const active_dot = $(
				".fp-section.active *[data-video-parts] > *[data-video-part].ready"
			).last();
			const active_dot_index =
				$(".fp-section.active *[data-video-parts] > *[data-video-part]").index(
					active_dot
				) + 1;
			const target_dot_index =
				$(".fp-section.active *[data-video-parts] > *[data-video-part]").index(
					$(this)
				) + 1;

			const space_between_dots = Math.abs(target_dot_index - active_dot_index);

			if (space_between_dots == 0) {
				//Р•СЃР»Рё РЅР°Р¶Р°С‚Р°СЏ СЃРµРєС†РёСЏ РЅРµ РїРµСЂРІР°СЏ (РєРѕС‚РѕСЂР°СЏ РІСЃРµРіРґР° РїСЂРѕРјРѕС‚Р°РЅР° РґРѕ РєРѕРЅС†Р°), С‚Рѕ РїРµСЂРµР·Р°РїСѓСЃРєР°РµРј Р°РЅРёРјР°С†РёСЋ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ С‚РѕРіРѕ, СЃ РїРѕСЃР»РµРґСѓСЋС‰РµРіРѕ РёР»Рё РїСЂРµРґС‹РґСѓС‰РµР№ СЃРµРєС†РёРё РјС‹ Рє РЅРµР№ РїСЂРёС€Р»Рё
				if (active_dot_index == 1) {
					return false;
				} else {
					$("#app").addClass("loading");

					setTimeout(function () {
						//РћС‚РјР°С‚С‹РІР°РµРј РЅР° РѕРґРЅСѓ СЃРµРєС†РёСЋ РЅР°Р·Р°Рґ, С‡С‚РѕР±С‹ Р·Р°РїСѓСЃС‚РёС‚СЊ РїСЂРѕРёРіСЂС‹РІР°РЅРёРµ С‚РµРєСѓС‰РµР№ Р·Р°РЅРѕРІРѕ
						playVideoToPart(section_id, target_dot_index - 1, true);

						setTimeout(function () {
							$("#app").removeClass("loading");

							playVideoToPart(section_id, target_dot_index);
						}, 600);
					}, 300);
				}
			} else if (space_between_dots == 1) {
				playVideoToPart(section_id, target_dot_index);
			} else {
				$("#app").addClass("loading");

				//РЎРѕР·РґР°РµРј РёСЃРєСѓСЃСЃС‚РІРµРЅРЅСѓСЋ Р·Р°РґРµСЂР¶РєСѓ РґР»СЏ РїР»Р°РІРЅРѕР№ Р°РЅРёРјР°С†РёРё РїРµСЂРµС…РѕРґРѕРІ
				setTimeout(function () {
					playVideoToPart(section_id, target_dot_index, true);

					setTimeout(function () {
						$("#app").removeClass("loading");
					}, 600);
				}, 300);
			}
		}
	});

	$("a[data-spoiler-button], *[data-spoiler-text]").on("click", function (e) {
		$(this).closest("*[data-spoiler]").toggleClass("spoiler-active");
		$(this).closest("html").toggleClass("hide-ui-md");
	});

	$("a[data-toggle-mobile-menu]").on("click", function (e) {
		$("#mobile-menu").toggleClass("active");
	});

	const eventsMapDate = document.querySelector(".js-eventsDate");
	const eventsMapTitle = document.querySelector(".js-eventsTitle");
	const eventsMapPinActive = document.querySelector(".js-eventsPin.active");

	document.querySelectorAll(".js-eventsPin").forEach((pin) => {
		pin.addEventListener("mouseover", function () {
			eventsMapDate.textContent = this.dataset.date;
			eventsMapTitle.textContent = this.dataset.title;
		});

		pin.addEventListener("mouseout", function () {
			eventsMapDate.textContent = eventsMapPinActive.dataset.date;
			eventsMapTitle.textContent = eventsMapPinActive.dataset.title;
		});

		pin.addEventListener("click", function () {
			const currentPin = this;

			if (!currentPin.id) {
				return
			}

			const id = currentPin.id.replace("-pin", "");
			this.parentElement.querySelector(".js-eventsState").classList.add("active");

			document.querySelectorAll(".js-eventsPin").forEach((pin) => {
				if (pin !== currentPin) {
					pin.classList.add("hidden");
				}
			});

			eventsMapPinActive.style.animationPlayState = "paused";

			document.querySelector(`#${id}-sidebar`).classList.toggle("active");
		})
	});

	const eventsTitleContainer = document.querySelector(".js-eventsTitleContainer");

	if (eventsTitleContainer) {
		eventsTitleContainer.addEventListener("click", () => {
			document.querySelector("#los-angeles").querySelector(".js-eventsState").classList.add("active");
			document.querySelectorAll(".js-eventsPin").forEach((pin) => {
				if (pin !== eventsMapPinActive) {
					pin.classList.add("hidden");
				}
			});
			eventsMapPinActive.style.animationPlayState = "paused";
			document.querySelector("#los-angeles-sidebar").classList.toggle("active");
		});
	}

	const eventsMapArrowLeft = document.querySelector(".js-eventsArrowLeft");
	const eventsMapArrowRight = document.querySelector(".js-eventsArrowRight");
	const eventsMap = document.querySelector(".js-eventsMap");

	if (eventsMapArrowLeft) {
		eventsMapArrowLeft.addEventListener("click", () => {
			eventsMapArrowLeft.classList.add("hidden");
			eventsMapArrowRight.classList.remove("hidden");
			eventsMap.style.right = "auto";
			eventsMap.style.left = "0";
		});
	}

	if (eventsMapArrowRight) {
		eventsMapArrowRight.addEventListener("click", () => {
			eventsMapArrowRight.classList.add("hidden");
			eventsMapArrowLeft.classList.remove("hidden");
			eventsMap.style.right = "-50px";
			eventsMap.style.left = "auto";
		});
	}

	document.querySelectorAll(".js-eventsSidebarForm").forEach((form) => {
		form.querySelector(".js-selectNatureInterest").addEventListener("change", (event) => {
			document.querySelectorAll(".js-addedOption").forEach((option) => {
				const select = option.querySelector('select');
				const textarea = option.querySelector('textarea')

				option.classList.add("hidden");

				if (select) {
					select.setAttribute("disabled", true);
					select.removeAttribute("required");
					select.value = "";
				}

				if (textarea) {
					textarea.setAttribute("disabled", true);
					textarea.removeAttribute("required");
					textarea.value = "";
				}

				if (option.dataset.id === event.detail.value) {
					option.classList.remove("hidden");

					if (select) {
						select.setAttribute("required", true);
						select.removeAttribute("disabled");
						select.value = "";
					}

					if (textarea) {
						textarea.setAttribute("required", true);
						textarea.removeAttribute("disabled");
						textarea.value = "";
					}
				}
			});
		})
	})

	document.querySelectorAll(".js-eventsSidebarForm").forEach((form) => {
		form.addEventListener("submit", async (event) => {

			const formData = new FormData(event.target);
			const data = {};
			const countryTitle = form.closest(".sidebar").querySelector(".iti__selected-flag").title;
			const country = countryTitle.split(":")[0];

			event.preventDefault();

			formData.forEach((value, key) => data[key] = value);
			data.event_location = form.closest(".sidebar").dataset.location;
			data.country = country;

			try {
				loadingForm(true, form);

				form.querySelector(".js-actionFormButtonSubmit").setAttribute("disabled", true);

				//demo-website: disabled
				//await fetch("https://zephs60lm6.execute-api.us-east-1.amazonaws.com/air_table_events", {
				//	body: JSON.stringify(data),
				//	method: "POST",
				//	headers: {
				//		"Content-Type": "application/json",
				//	},
				//});

				loadingForm(false, form);
			} catch (error) {
				console.error(error);
			}

			form.reset();
			form.querySelectorAll(".js-addedOption").forEach((option) => {
				option.classList.add("hidden");
			});
			form.classList.add("hidden");
			form.closest(".sidebar").querySelector(".js-sidebarComplete").classList.remove("hidden");
		})
	});

	//sidebar
	$(".sidebar").on("click", function (e) {
		if (e.target.classList[0] === "sidebar") {
			toggleSidebar(this);
		}
	});

	$(".sidebar-icon").on("click", function () {
		toggleSidebar(this);
	});

	function toggleSidebar(element) {
		let id = $(element).attr("id");
		let t;
		if (id.includes("-icon")) {
			t = id.replace("-close-icon", "-sidebar");
		} else if (id.includes("-pin")) {
			$(element).toggleClass("active");
			$(element.parentNode).toggleClass("active");
			t = id.replace("-pin", "-sidebar");
		} else {
			t = id;
		}

		if ($(`#${t}`).hasClass("active")) {
			eventsMapPinActive.style.animationPlayState = "running";
			const activeState = document.querySelector(".js-eventsState.active");

			if (activeState) {
				activeState.classList.remove("active");
			}

			document.querySelectorAll(".js-eventsPin").forEach((pin) => {
				pin.classList.remove("hidden");
			});
		}

		$(`#${t}`).toggleClass("active");
		const sidebarForm = $(`#${t} .js-eventsSidebarForm`)[0]

		if (sidebarForm) {
			sidebarForm.reset();
		}
	}

	$("a[data-toggle-reserve-popup]").on("click", function (e) {
		const geolocation = window.__userGeolocation;

		if (geolocation) {
			if (geolocation.city) {
				document.querySelector("#reserve-action-form-input-city").value = geolocation.city;
			}

			if (geolocation.country) {
				document.querySelector("#reserve-action-form-input-country").value = geolocation.country;
			}
		}

		$("#reserve-form").toggleClass("active");
		$("#mobile-menu").removeClass("active");
	});

	$("a[data-toggle-reserve-popup='open']").on("click", function (e) {
		if (getCookie("accept-cookies") == 1) {
			ga("send", "event", "Reserve", "Button", "Reserve Form Open", 0, {
				nonInteration: false,
			});
		}
	});

	$("a[data-toggle-reserve-thanks]").on("click", function (e) {
		$("#reserve-form-thanks").removeClass("active");
		$("#reserve-form").removeClass("active");
	});

	$('[data-video-element="part-arrow"] a').on("click", function (e) {
		$.fn.fullpage.moveSectionDown();
	});

	$('[data-video-element="part-parted-arrow"] a').on("click", function (e) {
		if ($(".fp-section.active").hasClass("with-parted-video")) {
			const section_id = $(".fp-section.active").attr("id");
			const active_dot = $(
				".fp-section.active *[data-video-parts] > *[data-video-part].ready"
			).last();

			const next_dot = active_dot.next();

			if (next_dot.length > 0) {
				const next_dot_index =
					$(
						".fp-section.active *[data-video-parts] > *[data-video-part]"
					).index(next_dot) + 1;

				playVideoToPart(section_id, next_dot_index);
			} else {
				$.fn.fullpage.moveSectionDown();
			}
		}
	});

	$("a[data-video-arrow]").on("click", function (e) {
		const section_id = $(".fp-section.active").attr("id");
		const active_dot = $(
			".fp-section.active *[data-video-parts] > *[data-video-part].ready"
		).last();

		switch ($(this).attr("data-video-arrow")) {
			case "left":
				const prev_dot = active_dot.prev();

				if (prev_dot.length > 0) {
					const prev_dot_index =
						$(
							".fp-section.active *[data-video-parts] > *[data-video-part]"
						).index(prev_dot) + 1;

					playVideoToPart(section_id, prev_dot_index);
				} else {
					$.fn.fullpage.moveSectionUp();
				}

				break;

			case "right":
				const next_dot = active_dot.next();

				if (next_dot.length > 0) {
					const next_dot_index =
						$(
							".fp-section.active *[data-video-parts] > *[data-video-part]"
						).index(next_dot) + 1;

					playVideoToPart(section_id, next_dot_index);
				} else {
					$.fn.fullpage.moveSectionDown();
				}

				break;
		}
	});

	async function sendResponseForm(name, phone, email, country) {
		let response;

		//demo-website: disabled
		return;
		response = await fetch(
			"https://zephs60lm6.execute-api.us-east-1.amazonaws.com/air_table_integration",
			{
				method: "POST",
				body: JSON.stringify({
					name: name,
					phone: phone,
					email: email,
					country: country,
				}),
			}
		);

		if (response.ok) {
			$("#reserve-form").removeClass("active");
			$("#reserve-form-thanks").addClass("active");
		} else {
			console.log(response);
		}
	}

	document.querySelectorAll(".js-reserveForm").forEach((form) => {
		form.addEventListener(("submit"), async (event) => {
			const formData = new FormData(event.target);
			const data = {};

			event.preventDefault();

			formData.forEach((value, key) => data[key] = value);

			try {
				loadingForm(true, form);

				//demo-website: disabled
				//await fetch("https://zephs60lm6.execute-api.us-east-1.amazonaws.com/air_table_integration", {
				//	body: JSON.stringify(data),
				//	headers: {
				//		"Content-Type": "application/json",
				//	},
				//	method: "POST",
				//});

				//await fetch("https://zephs60lm6.execute-api.us-east-1.amazonaws.com/hubapi_contacts", {
				//	body: JSON.stringify(data),
				//	headers: {
				//		"Content-Type": "application/json",
				//	},
				//	method: "POST",
				//});

				loadingForm(false, form);
			} catch (error) {
				console.error(error);
			}

			form.reset();
			document.querySelector(".js-reserveForm").classList.remove("active");
			document.querySelector(".js-reserveFormThanks").classList.add("active");
		});
	});

	async function sendSubscribeForm(email) {
		let response;

		//demo-website: disabled
		return;
		response = await fetch(
			"https://zephs60lm6.execute-api.us-east-1.amazonaws.com/air_table_newsletter",
			{
				method: "POST",
				body: JSON.stringify({
					email: email,
				}),
			}
		);

		if (response.ok) {
			$("#subscribe-form").css("opacity", "");
			$("#subscribe-form").css("cursor", "");
			$('#subscribe-form input[name="email"]').addClass("success");
			$('#subscribe-form input[name="email"]').val("Subscription successful");
		} else {
			console.log(response);
		}
	}

	$('#reserve-action-form input[name="phone"]').focus(function () {
		if ($(this).val().length == 0) {
			$(this).val("+");
		}
	});

	$('#reserve-action-form input[name="phone"]').focusout(function () {
		if ($(this).val() == "+") {
			$(this).val("");
		}
	});

	$(document).on("submit", "#subscribe-form", function (e) {
		e.preventDefault();
		$("#subscribe-form input").removeClass("error");

		let has_errors = false;

		let fields_email = $('#subscribe-form input[name="email"]').val();

		if (fields_email.length == 0) {
			has_errors = true;
			$('#subscribe-form input[name="email"]').addClass("error");
		}

		if (!has_errors) {
			$("#subscribe-form input, #subscribe-form button").prop("disabled", true);
			$("#subscribe-form").css("opacity", "60%");
			$("#subscribe-form").css("cursor", "wait");

			sendSubscribeForm(fields_email);
		}
	});

	//Р’С‹Р±РѕСЂ С†РІРµС‚Р° РІ РіР°Р»РµСЂРµРµ РјР°С€РёРЅ bespoke-exp
	$("a[data-slide-color]").on("click", function (e) {
		const target_color = $(this).attr("data-slide-color");

		$("#bespoke-expierence-gallery *[data-slide-type]").each(function (index) {
			if ($(this).css("backgroundImage") != "none") {
				$(this).css(
					"backgroundImage",
					'url("' + bespoke_gallery_slides[target_color][index + 1]["image"] +
					'")'
				);
			}
			if ($(this).attr("data-bg") !== undefined) {
				$(this).attr(
					"data-bg",
					bespoke_gallery_slides[target_color][index + 1]["image"]
				);
			}

			const title = $(this).find("*[data-slide-title]");
			const text = $(this).find("*[data-slide-text]");
			const textHidden = $(this).find("*[data-slide-text-hidden]");

			if (index === 0 || index === 1) {
				title.css("color", '#000000');
				text.css("color", '#000000');
				textHidden.css("color", '#000000');
			} else {
				title.css("color", '#ffffff');
				text.css("color", '#ffffff');
				textHidden.css("color", '#ffffff');
			}

			$(this)
				.find("*[data-slide-title]")
				.text(bespoke_gallery_slides[target_color][index + 1]["title"]);
			$(this)
				.find("*[data-slide-text]")
				.text(bespoke_gallery_slides[target_color][index + 1]["text"]);
			$(this)
				.find("*[data-slide-text-hidden]")
				.text(bespoke_gallery_slides[target_color][index + 1]["text_hidden"]);
		});

		$(".fp-section.active a[data-slide-color]").removeClass("active");
		$(".fp-section.active a[data-slide-color='" + target_color + "']").addClass(
			"active"
		);
	});

	$("a[data-navigation-item], a[data-navigation-mobile-item]").on(
		"click",
		function (e) {
			e.preventDefault();

			if (!menu_section_change_in_progress) {
				if ($("#mobile-menu").hasClass("active")) {
					$("#mobile-menu").removeClass("active");
				}

				$("#app").addClass("loading");
				$("#topnav").addClass("loading");

				const next_section_id = $(this).attr("href").substring(1);
				const next_section_index =
					$(".fp-section").index(document.getElementById(next_section_id)) + 1;
				const current_section_index =
					$(".fp-section").index($(".fp-section.active")) + 1;

				last_scroll_direction = 1;

				//РЎРѕР·РґР°РµРј РёСЃРєСѓСЃСЃС‚РІРµРЅРЅСѓСЋ Р·Р°РґРµСЂР¶РєСѓ РґР»СЏ РїР»Р°РІРЅРѕР№ Р°РЅРёРјР°С†РёРё РїРµСЂРµС…РѕРґРѕРІ
				setTimeout(function () {
					//РћР±РЅРѕРІР»СЏРµРј РїРѕР»РѕР¶РµРЅРёРµ СЌР»РµРјРµРЅС‚РѕРІ РґР»СЏ Р’РЎР•РҐ СЃРµРєС†РёР№, РєСЂРѕРјРµ Р±СѓРґСѓС‰РµР№
					$(".fp-section").each(function (index) {
						const section_index = parseInt(index) + 1;
						if (next_section_index != section_index) {
							refreshSectionsOnLeave(section_index, next_section_index, false);
						}
					});

					pauseVideos();
					refreshSectionsOnLeave(next_section_index);

					//РџСЂРё РїРµСЂРµС…РѕРґРµ РЅР° С‚РµРєСѓС‰СѓСЋ Р°РєС‚РёРІРЅСѓСЋ СЃРµСЃСЃРёСЋ fullpage РЅРµ РІС‹Р·С‹РІР°РµС‚ СЃРѕР±С‹С‚РёРµ onLeave
					if (next_section_index != current_section_index) {
						//Р§С‚РѕР±С‹ РёРіРЅРѕСЂРёСЂРѕРІР°С‚СЊ Р±Р»РѕРєРёСЂРѕРІРєСѓ РїРµСЂРµС…РѕРґР° РјРµР¶РґСѓ СЃРµРєС†РёСЏРјРё, РєРѕРіРґР° РІРёРґРµРѕ РµС‰Рµ РЅРµ РїСЂРѕРјРѕС‚Р°РЅРѕ Рє РґРѕРїСѓСЃС‚РёРјРѕРјСѓ РїСЂРµРґРµР»Сѓ
						menu_section_change_in_progress = true;
						$.fn.fullpage.silentMoveTo(next_section_index);
					}

					if (next_section_id == 'dealerships') {
						animatePartedElements(next_section_id, 1);
					}

					setTimeout(function () {
						$("#app").removeClass("loading");
						$("#topnav").removeClass("loading");
					}, 300);
				}, 300);
			}
		}
	);

	function refreshSectionsOnLeave(
		next_section_index,
		current_section_index = null,
		play_next_section_video = true
	) {
		const next_section = $(".fp-section").eq(next_section_index - 1);
		const next_section_id = next_section.attr("id");

		if (!current_section_index) {
			current_section_index =
				$(".fp-section").index($(".fp-section.active")) + 1;
		}

		//РћСЃС‚Р°РЅР°РІР»РёРІР°РµРј РёРЅС‚РµСЂРІР°Р» СЂР°Р·Р±РёС‚РѕРіРѕ РЅР° С‡Р°СЃС‚Рё РІРёРґРµРѕ, РµСЃР»Рё РѕРЅ РµСЃС‚СЊ
		if (
			parted_video_player_interval &&
			typeof parted_video_player_interval !== undefined
		) {
			window.clearInterval(parted_video_player_interval);
			parted_video_player_in_progress = false;
			$("#app").removeClass("parted-video-player-in-progress");
		}

		if (
			video_finish_checker_interval &&
			typeof video_finish_checker_interval !== undefined
		) {
			window.clearInterval(video_finish_checker_interval);
		}

		//Р’С‹РєР»СЋС‡Р°РµРј Р·Р°С†РёРєР»РµРЅРЅС‹Рµ РІРёРґРµРѕ С‚РµРєСѓС‰РµРіРѕ СЌС‚Р°Р¶Р°
		$(".fp-section.active video.skip-level-pause").each(function () {
			$(this).trigger("pause");
		});

		//Р—Р°РїСѓСЃРєР°РµРј Р·Р°С†РёРєР»РµРЅРЅС‹Рµ РІРёРґРµРѕ Р±СѓРґСѓС‰РµРіРѕ СЌС‚Р°Р¶Р°
		if (play_next_section_video) {
			$(
				".fp-section:nth-of-type(" +
				next_section_index +
				") video.skip-level-pause"
			).each(function () {
				const cycled_video = $(this).get(0);

				//cycled_video.load();
				cycled_video.currentTime = 0;
				cycled_video.play();
			});
		}

		//РђРґР°РїС‚РёСЂСѓРµРј СЃРєСЂРѕР»Р» Р±СѓРґСѓС‰РµРіРѕ СЌС‚Р°Р¶Р°
		let iscroll = next_section.find(".fp-scrollable");

		if (iscroll.length) {
			iscroll = iscroll.data("iscrollInstance");

			if (iscroll && typeof iscroll !== undefined) {
				if (current_section_index > next_section_index) {
					iscroll.scrollTo(0, iscroll.maxScrollY, 0);
					animateElements(next_section_id, 1, -1);
				} else {
					iscroll.scrollTo(0, 0, 0);
					animateElements(next_section_id, 0, 1);
				}
			} else {
				animateElements(next_section_id, 0, 1);
			}
		} else {
			animateElements(next_section_id, 0, 1);
		}

		//СЃР±СЂР°СЃС‹РІР°РµРј СЃРѕСЃС‚РѕСЏРЅРёСЏ РІСЃРїР»С‹РІР°СЋС‰РёС… СЌР»РµРјРµРЅС‚РѕРІ
		animateElementsReset();

		if (current_section_index > next_section_index) {
			transformElementsReset(next_section_id, "to");
		} else {
			transformElementsReset(next_section_id, "from");
		}

		//РђРґР°РїС‚РёСЂСѓРµРј РїРѕР»РѕР¶РµРЅРёРµ РІРёРґРµРѕ
		const next_video_container = next_section.find(
			'*[data-video-container="original"]'
		);
		const next_video = next_video_container.find("video").get(0);
		const next_video_mirrowed_container = next_section.find(
			'*[data-video-container="reverse"]'
		);
		const next_video_mirrowed = next_video_mirrowed_container
			.find("video")
			.get(0);
		const next_video_parts = next_section.find("*[data-video-part]");

		if (current_section_index > next_section_index) {
			if (
				next_video &&
				typeof next_video !== undefined &&
				next_video_mirrowed &&
				typeof next_video_mirrowed !== undefined
			) {
				//next_video.load();
				next_video.pause();
				next_video.currentTime = next_video.duration;

				//next_video_mirrowed.load();
				next_video_mirrowed.pause();

				if (!isNaN(next_video_mirrowed.duration)) {
					next_video_mirrowed.currentTime = 0;
				}

				next_video_container.removeClass("active");
				next_video_mirrowed_container.addClass("active");
			}

			if (next_video_parts.length > 0) {
				playVideoToPart(next_section_id, next_video_parts.length, true);
				animatePartedElements(next_section_id, next_video_parts.length);
			}
		} else {
			if (
				next_video &&
				typeof next_video !== undefined &&
				next_video_mirrowed &&
				typeof next_video_mirrowed !== undefined
			) {
				//next_video.load();
				next_video.pause();
				next_video.currentTime = 0;

				//next_video_mirrowed.load();
				next_video_mirrowed.pause();

				if (!isNaN(next_video_mirrowed.duration)) {
					next_video_mirrowed.currentTime = parseFloat(
						next_video_mirrowed.duration
					);
				}

				next_video_mirrowed_container.removeClass("active");
				next_video_container.addClass("active");
			}

			if (next_video_parts.length > 0) {
				playVideoToPart(next_section_id, 1, true);
				animatePartedElements(next_section_id, 1);
			}
		}
	}

	function pauseVideos(with_sync = false) {
		const video = $(
			".fp-section.active *[data-video-container].active video"
		).get(0);
		let video_mirrowed;

		if (video && typeof video !== undefined) {
			video.pause();

			//РЎРёРЅС…СЂРѕРЅРёР·РёСЂСѓРµРј РѕС‚Р·РµСЂРєР°Р»РµРЅРЅРѕРµ РІРёРґРµРѕ
			video_mirrowed = $(
				".fp-section.active *[data-video-container]:not(.active) video"
			).get(0);
		}

		if (video_mirrowed && typeof video_mirrowed !== undefined) {
			video_mirrowed.pause();

			if (with_sync) {
				//video_mirrowed.currentTime = video_mirrowed.duration - video.currentTime;
			}
		}
	}

	function changeLastScrollDirection(newDirection) {
		if (last_scroll_direction == 1) {
			last_scroll_direction = -1;
		} else {
			last_scroll_direction = 1;
		}

		changing_last_scroll_direction_in_progress = false;
	}

	function sectionScrollEvent() {
		if (!$("#mobile-menu").hasClass("active")) {
			//РСЃРєСѓСЃСЃС‚РІРµРЅРЅРѕ С‚РѕСЂРјРѕР·РёРј РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ СЂРµР·РєРѕР№ СЃРјРµРЅС‹ СЃРєСЂРѕР»Р»Р°
			if (
				this.directionY != last_scroll_direction &&
				!this.hasHorizontalScroll
			) {
				//Р•СЃР»Рё РјС‹ РµС‰Рµ РЅРµ РґРѕР±Р°РІРёР»Рё РІ РѕС‡РµСЂРµРґСЊ СЃРѕР±С‹С‚РёРµ, Р·Р°РєРёРґС‹РІР°РµРј РµРіРѕ
				if (!changing_last_scroll_direction_in_progress) {
					const video = $(
						".fp-section.active *[data-video-container].active video"
					).get(0);
					const video_mirrowed = $(
						".fp-section.active *[data-video-container]:not(.active) video"
					).get(0);

					if (
						video &&
						typeof video !== undefined &&
						video_mirrowed &&
						typeof video_mirrowed !== undefined
					) {
						//РЎРёРЅС…СЂРѕРЅРёР·РёСЂСѓРµРј РІРёРґРµРѕ
						//video_mirrowed.load();
						video_mirrowed.pause();

						if (!isNaN(video_mirrowed.duration)) {
							video_mirrowed.currentTime = parseFloat(
								video_mirrowed.duration - video.currentTime
							);
						}

						var changing_last_scroll_direction_in_progress = true;
						$("#video-loader").addClass("active");

						//РЎРѕР·РґР°РµРј Р·Р°РґРµСЂР¶РєСѓ РґР»СЏ С‚РѕРіРѕ, С‡С‚РѕР±С‹ РІРёРґРµРѕ СѓСЃРїРµР»Рѕ Р·Р°СЂРµСЂРµРЅРґРµСЂРёС‚СЊСЃСЏ
						setTimeout(function () {
							changeLastScrollDirection();
							$("#video-loader").removeClass("active");
						}, 400);

						return false;
					}
				}
			}

			const section_id = $(this.scroller).attr("data-parent-section");
			const scrolled_percentage_raw = this.y / this.maxScrollY;

			animateElements(section_id, scrolled_percentage_raw, this.directionY);
		}
	}

	function sectionScrollEndEvent() {
		if (!parted_video_player_in_progress) {
			pauseVideos(true);
		}
	}

	function sectionScrollHandler(defaultHandler, type) {
		if (
			!$("#app").hasClass("loading") &&
			!$("#mobile-menu").hasClass("active") &&
			!$("#los-angeles-sidebar").hasClass("active") &&
			!$("#los-angeles2-sidebar").hasClass("active") &&
			!$("#florida-sidebar").hasClass("active") &&
			!$("#ny-sidebar").hasClass("active")
		) {
			if ($(".fp-section.active").hasClass("with-parted-video")) {
				const section_id = $(".fp-section.active").attr("id");
				const active_dot = $(
					".fp-section.active *[data-video-parts] > *[data-video-part].ready"
				).last();

				switch (type) {
					case "up":
						const prev_dot = active_dot.prev();

						if (prev_dot.length > 0) {
							const prev_dot_index =
								$(
									".fp-section.active *[data-video-parts] > *[data-video-part]"
								).index(prev_dot) + 1;

							playVideoToPart(section_id, prev_dot_index);
						} else {
							defaultHandler(type);
						}

						break;

					case "down":
						const next_dot = active_dot.next();

						if (next_dot.length > 0) {
							const next_dot_index =
								$(
									".fp-section.active *[data-video-parts] > *[data-video-part]"
								).index(next_dot) + 1;

							//Р‘С‹СЃС‚СЂС‹Р№ РєРѕСЃС‚С‹Р»СЊ
							if (section_id == "vision-statement" && next_dot_index == 2) {
								$.fn.fullpage.moveSectionDown();
							} else {
								playVideoToPart(section_id, next_dot_index);
							}
						} else {
							defaultHandler(type);
						}

						break;
				}
			} else {
				defaultHandler(type);
			}
		}
	}

	function playVideoToPart(section_id, target_part_idx, instant = false) {
		if (!parted_video_player_in_progress) {
			const target_part = $(
				"#" + section_id + " *[data-video-parts] > *[data-video-part]"
			).eq(target_part_idx - 1);
			const target_part_timestamp = target_part.attr("data-video-timestamp");
			const target_part_duration = target_part.attr("data-part-duration");

			const current_part = $(
				"#" + section_id + " *[data-video-parts] > *[data-video-part].ready"
			).last();
			const current_part_idx =
				$("#" + section_id + " *[data-video-parts] > *[data-video-part]").index(
					current_part
				) + 1;
			const current_part_timestamp = current_part.attr("data-video-timestamp");
			const current_part_duration = current_part.attr("data-part-duration");

			const video_container = $(
				"#" + section_id + ' [data-video-container="original"]'
			);
			const video = video_container.find("video").get(0);
			const video_mirrowed_container = $(
				"#" + section_id + ' *[data-video-container="reverse"]'
			);
			const video_mirrowed = video_mirrowed_container.find("video").get(0);

			let playbackRate;
			const playbackRateMin = 1;
			const playbackRateMax = 2;

			if (target_part.hasClass("disabled")) {
				return;
			}

			//РЎРµР№С‡Р°СЃ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ РїР»Р°РІРЅРѕРіРѕ РїСЂРѕРёРіСЂС‹РІР°РЅРёСЏ РІРѕР·РјРѕР¶РЅР° С‚РѕР»СЊРєРѕ РјРµР¶РґСѓ РґРІСѓРјСЏ СЃРѕСЃРµРґРЅРёРјРё СЃРµРєС†РёСЏРјРё
			if (!instant) {
				if (Math.abs(target_part_idx - current_part_idx) > 1) {
					instant = true;
				}
			}

			animateElementsReset();

			if (instant) {
				$("#" + section_id + " *[data-video-parts] > *[data-video-part]")
					.removeClass("ready")
					.removeClass("active");
				$(
					"#" + section_id + " *[data-video-parts] > *[data-video-part] > div"
				).css("width", "");
				target_part.prevAll().addClass("ready");
				target_part.addClass("ready");

				if (video && typeof video !== undefined) {
					//video.load();
					video.pause();
					video.playbackRate = 0;
					video.currentTime = target_part_timestamp;

					//video_mirrowed.load();
					video_mirrowed.pause();

					if (!isNaN(video_mirrowed.duration)) {
						video_mirrowed.playbackRate = 0;
						video_mirrowed.currentTime = parseFloat(
							video_mirrowed.duration - target_part_timestamp
						);
					}

					if (target_part_idx >= current_part_idx) {
						video_container.addClass("active");
						video_mirrowed_container.removeClass("active");
					} else {
						video_container.removeClass("active");
						video_mirrowed_container.addClass("active");
					}
				}

				transformElementsReset(section_id, "to", current_part_idx);
				transformElementsReset(section_id, "from", target_part_idx);
				animatePartedElements(section_id, target_part_idx);
			} else {
				parted_video_player_in_progress = true;
				$("#app").addClass("parted-video-player-in-progress");

				//Р—РґРµСЃСЊ Р¶Рµ РІС‹СЃС‚Р°РІР»СЏРµРј РёР·РјРµРЅРµРЅРёСЏ Р·Р° РїРµСЂРІСѓСЋ СЃРµРєСѓРЅРґСѓ СЂСѓРєР°РјРё, РґРѕ С‚РѕРіРѕ, РєР°Рє СЃСЂР°Р±РѕС‚Р°РµС‚ РёРЅС‚РµСЂРІР°Р» (transition width Сѓ РєРѕРЅС‚РµР№РЅРµСЂР° РІС‹СЃС‚Р°РІР»РµРЅ РІ 1000РјСЃ)
				if (target_part_idx >= current_part_idx) {
					video_container.addClass("active");
					video_mirrowed_container.removeClass("active");

					target_part.addClass("active");

					if (video && typeof video !== undefined) {
						playbackRate = Math.abs(
							(target_part_timestamp - current_part_timestamp) /
							target_part_duration
						);

						if (playbackRate < playbackRateMin) {
							playbackRate = playbackRateMin;
						} else if (playbackRate > playbackRateMax) {
							playbackRate = playbackRateMax;
						}

						video.playbackRate = playbackRate;

						video.play();
					}

					//РђРЅРёРјРёСЂРѕРІР°РЅРЅРѕ СЃР±СЂР°СЃС‹РІР°РµРј СЃРѕСЃС‚РѕСЏРЅРёРµ С‚РµРєСѓС‰РµР№ Рё СЃР»РµРґСЋСѓС‰РµР№ СЃРµРєС†РёРё
					transformElementsReset(section_id, "to", current_part_idx);
					transformElementsReset(section_id, "from", target_part_idx);
					animateElementsReset();
				} else {
					video_mirrowed_container.addClass("active");
					video_container.removeClass("active");

					current_part.addClass("active");

					if (video_mirrowed && typeof video_mirrowed !== undefined) {
						playbackRate = Math.abs(
							(current_part_timestamp - target_part_timestamp) /
							current_part_duration
						);

						if (playbackRate < playbackRateMin) {
							playbackRate = playbackRateMin;
						} else if (playbackRate > playbackRateMax) {
							playbackRate = playbackRateMax;
						}

						video_mirrowed.playbackRate = playbackRate;

						video_mirrowed.play();
					}

					//РђРЅРёРјРёСЂРѕРІР°РЅРЅРѕ СЃР±СЂР°СЃС‹РІР°РµРј СЃРѕСЃС‚РѕСЏРЅРёРµ С‚РµРєСѓС‰РµР№ СЃРµРєС†РёРё
					transformElementsReset(section_id, "from", current_part_idx);
					transformElementsReset(section_id, "to", target_part_idx);
					animateElementsReset();
				}

				$("#" + section_id + " *[data-video-parts]").css("opacity", "100%");

				parted_video_player_start_time = Date.now();
				parted_video_player_interval = setInterval(partedVideoInterval, 100);
			}
		} else {
			return false;
		}
	}

	function videoFinishCheckerInterval() {
		const video = $(".fp-section.active video").get(0);

		if (video.currentTime == video.duration) {
			window.clearInterval(video_finish_checker_interval);

			const section_id = $(".fp-section.active").attr("id");

			switch (section_id) {
				case "technology":
					$("#" + section_id + ' *[data-video-element="part-1"]').css(
						"opacity",
						100
					);
					$("#" + section_id + ' *[data-transform-element="transform-1"]').css(
						"transform",
						"translateY(0px)"
					);

					$(
						"#" +
						section_id +
						' *[data-video-element="part-1"] *[data-prevent-autoplay]'
					).addClass("active");

					$("#" + section_id + ' *[data-video-element="part-arrow"]')
						.css("opacity", 100)
						.addClass("active");

					break;
			}
		}
	}

	function partedVideoInterval() {
		const active_part = $(
			".fp-section.active *[data-video-parts] > *[data-video-part].active"
		);

		if (active_part.length > 0) {
			const section_id = $(".fp-section.active").attr("id");
			const active_part_idx =
				$(".fp-section.active *[data-video-parts] > *[data-video-part]").index(
					active_part
				) + 1;

			const video = $(
				'.fp-section.active *[data-video-container="original"] video'
			).get(0);
			const video_mirrowed = $(
				'.fp-section.active *[data-video-container="reverse"] video'
			).get(0);

			let from_part_timestamp;
			let to_part_timestamp;
			let to_part_duration;

			const active_part_bar = active_part.find("div");
			let active_part_bar_width;
			let direction;

			//Р•СЃР»Рё РµСЃС‚СЊ РєР»Р°СЃСЃ ready - Р·РЅР°С‡РёС‚ РїРѕР»РѕСЃРєР° РЅР° СѓР±С‹РІР°РЅРёРµ
			if (active_part.hasClass("ready")) {
				if (video_mirrowed && typeof video_mirrowed !== undefined) {
					from_part_timestamp = Number(
						active_part.attr("data-video-timestamp")
					);
					to_part_timestamp = Number(
						active_part.prev().attr("data-video-timestamp")
					);

					active_part_bar_width =
						Number(
							(video_mirrowed.duration -
								video_mirrowed.currentTime -
								to_part_timestamp) /
							(from_part_timestamp - to_part_timestamp)
						) * 100;
				} else {
					to_part_duration = Number(
						active_part.prev().attr("data-part-duration")
					);

					active_part_bar_width =
						((to_part_duration -
							(Date.now() - parted_video_player_start_time) / 1000) /
							to_part_duration) *
						100;
				}

				direction = -1;
			} else {
				if (video && typeof video !== undefined) {
					from_part_timestamp = Number(
						active_part.prev().attr("data-video-timestamp")
					);
					to_part_timestamp = Number(active_part.attr("data-video-timestamp"));

					active_part_bar_width =
						Number(
							(video.currentTime - from_part_timestamp) /
							(to_part_timestamp - from_part_timestamp)
						) * 100;
				} else {
					to_part_duration = Number(active_part.attr("data-part-duration"));

					active_part_bar_width =
						((Date.now() - parted_video_player_start_time) /
							1000 /
							to_part_duration) *
						100;
				}

				direction = 1;
			}

			if (active_part_bar_width < 1) {
				active_part_bar_width = 0;
			}
			if (active_part_bar_width > 99) {
				active_part_bar_width = 100;
			}

			active_part_bar.css("width", active_part_bar_width + "%");

			if (
				(direction == "1" && active_part_bar_width == 100) ||
				(direction == "-1" && active_part_bar_width == 0)
			) {
				window.clearInterval(parted_video_player_interval);

				if (direction == "-1") {
					animatePartedElements(section_id, active_part_idx - 1);
				} else {
					animatePartedElements(section_id, active_part_idx);
				}

				parted_video_player_in_progress = false;
				$("#app").removeClass("parted-video-player-in-progress");

				active_part.removeClass("active");

				//РЎРёРЅС…СЂРѕРЅРёР·РёСЂСѓРµРј РѕС‚Р·РµСЂРєР°Р»РµРЅРЅРѕРµ РІРёРґРµРѕ
				if (direction == "-1") {
					if (
						video &&
						typeof video !== undefined &&
						video_mirrowed &&
						typeof video_mirrowed !== undefined
					) {
						video_mirrowed.pause();

						//video.load();
						video.pause();

						if (!isNaN(video.duration)) {
							video.currentTime = video.duration - video_mirrowed.currentTime;
						}
					}

					active_part.removeClass("ready");
				} else {
					if (
						video &&
						typeof video !== undefined &&
						video_mirrowed &&
						typeof video_mirrowed !== undefined
					) {
						video.pause();

						//video_mirrowed.load();
						video_mirrowed.pause();

						if (!isNaN(video_mirrowed.duration)) {
							video_mirrowed.currentTime = parseFloat(
								video_mirrowed.duration - video.currentTime
							);
						}
					}

					active_part.addClass("ready");
				}

				active_part_bar.css("width", "");
			}
		} else {
			parted_video_player_in_progress = false;
			$("#app").removeClass("parted-video-player-in-progress");
			window.clearInterval(parted_video_player_interval);
		}
	}

	//РџРѕРґСЃРІРµС‚РєР° Р°РєС‚РёРІРЅРѕРіРѕ РїСѓРЅРєС‚Р° РјРµРЅСЋ
	function menuSectionsUpdate(section_id) {
		$("a[data-navigation-item]").removeClass("active");
		$("a[data-navigation-item][href*='#" + section_id + "']").addClass(
			"active"
		);

		//РљРѕСЃС‚С‹Р»СЊ РёР·-Р·Р° СЃСЂРѕС‡РЅС‹С… РїСЂР°РІРѕРє
		if (section_id == "product-2" || section_id == "product-3") {
			$("a[data-navigation-item][href*='#product']").addClass("active");
		} else if (
			section_id == "bespoke-expierence-2" ||
			section_id == "bespoke-expierence-3"
		) {
			$("a[data-navigation-item][href*='#bespoke-expierence']").addClass(
				"active"
			);
		}

		$("html").removeClass("hide-ui-md");
		$(".fp-section.active *[data-spoiler]").removeClass("spoiler-active");
	}

	function transformElementsReset(
		section_id,
		transform_start_position = "from",
		part_idx = null
	) {
		if (!section_id) {
			section_id = $(".fp-section.active").attr("id");
		}

		//Р’РѕР·РІСЂР°С‰Р°РµРј С‚СЂР°РЅСЃС„РѕСЂРј-СЌР»РµРјРµРЅС‚Р°Рј РґРµС„РѕР»С‚РЅРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ
		//Р’РђР–РќРћ: СЃРµР№С‡Р°СЃ СЃРєСЂРёРїС‚ РЅРµ РїСЂРёРјРµРЅСЏРµС‚ С‚РѕРЅРєСѓСЋ РЅР°СЃС‚СЂРѕР№РєСѓ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ С‚РѕРіРѕ, СЌС‚Р°Р¶ Р”Рћ РёР»Рё РџРћРЎР›Р• Р°РєС‚РёРІРЅРѕРіРѕ
		//РџРµСЂРµРґРµР»Р°С‚СЊ РІ Р±СѓРґСѓС‰РµРј СЃ data-default РЅР° data-from Рё data-to
		switch (transform_start_position) {
			case "from":
				if (!part_idx) {
					$("#" + section_id)
						.find("*[data-transform-element]")
						.each(function (index) {
							$(this).css("transform", $(this).attr("data-transform-from"));
						});
				} else {
					$("#" + section_id)
						.find('*[data-transform-element="transform-' + part_idx + '"]')
						.each(function (index) {
							$(this).css("transform", $(this).attr("data-transform-from"));
						});
				}

				break;
			case "to":
				if (!part_idx) {
					$("#" + section_id)
						.find("*[data-transform-element]")
						.each(function (index) {
							$(this).css("transform", $(this).attr("data-transform-to"));
						});
				} else {
					$("#" + section_id)
						.find('*[data-transform-element="transform-' + part_idx + '"]')
						.each(function (index) {
							$(this).css("transform", $(this).attr("data-transform-to"));
						});
				}

				break;
		}
	}

	function animateElementsReset() {
		//РћР±РЅСѓР»СЏРµРј СЃРѕСЃС‚РѕСЏРЅРёРµ Р°РЅРёРјР°С†РёРё Р’РЎР•РҐ СЌР»РµРјРµРЅС‚РѕРІ (РёРЅР°С‡Рµ РІРѕР·РЅРёРєР°РµС‚ РїСЂРѕР±Р»РµРјР° РїРѕР·РёС†РёРѕРЅРёСЂРѕРІР°РЅРёСЏ fixed-СЌР»РµРјРµРЅС‚РѕРІ РІРЅСѓС‚СЂРё transform)
		$(".fp-section *[data-video-element]").css("opacity", 0);
		$(".fp-section *[data-video-pin]").css("opacity", 0);
		$(".fp-section *[data-video-parts]").css("opacity", 0);
		$(".fp-section *[data-slide-colors]").css("opacity", 0);
		$(".fp-section *[data-prevent-autoplay]").removeClass("active");
	}

	//РђРЅРёРјР°С†РёСЏ СЌР»РµРјРµРЅС‚РѕРІ РІРЅСѓС‚СЂРё СЌС‚Р°Р¶Р° РїСЂРё Р°РІС‚РѕРїСЂРѕРјРѕС‚РєРµ РґРѕ Р·Р°РґР°РЅРЅРѕРіРѕ timestamp Сѓ РІРёРґРµРѕ
	function animatePartedElements(section_id, part_idx) {
		$("#" + section_id + " *[data-video-parts]").css("opacity", "100%");

		$("#" + section_id)
			.find('*[data-transform-element="transform-' + part_idx + '"]')
			.each(function (index) {
				$(this).css("transform", $(this).attr("data-transform-active"));
			});

		switch (section_id) {
			case "vision-statement":
				switch (part_idx) {
					case 1:
					case 2:
						$("#" + section_id + ' *[data-video-element="part-1"]').css(
							"opacity",
							100
						);

						const visionStatementTitle = document.querySelector(".js-visionStatementTitle");
						const visionStatementSubtitle = document.querySelector(".js-visionStatementSubtitle");

						visionStatementTitle.style.animation = "none";
						visionStatementSubtitle.style.animation = "none";

						setTimeout(() => {
							visionStatementTitle.style.animation = null;
							visionStatementSubtitle.style.animation = null;
						}, 0)

						break;
				}

				break;

			case "dealerships":
				switch (part_idx) {
					case 1:
						$("#" + section_id + ' *[data-video-element="part-1"]').css(
							"opacity",
							100
						);

						break;
				}

			case "product":
				switch (part_idx) {
					case 1:
						$("#" + section_id + ' *[data-video-element="part-1"]').css(
							"opacity",
							100
						);

						break;
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
						$(
							"#" + section_id + ' *[data-video-element="pin-' + part_idx + '"]'
						).css("opacity", 100);

						break;

					case 7:
						$("#" + section_id + ' *[data-video-element="part-7"]').css(
							"opacity",
							100
						);
						$(
							"#" +
							section_id +
							' *[data-video-element="part-7"] *[data-prevent-autoplay]'
						).addClass("active");

						break;
				}

				break;

			case "bespoke-expierence-3":
				$(".fp-section *[data-video-element-bg]").removeClass("active");

				$(
					"#" + section_id + ' *[data-video-element-bg="bg-' + part_idx + '"]'
				).addClass("active");
				$(
					"#" + section_id + ' *[data-video-element="part-' + part_idx + '"]'
				).css("opacity", 100);
				$("#" + section_id + ' *[data-video-element="part-parted-arrow"]')
					.css("opacity", 100)
					.addClass("active");

				switch (part_idx) {
					case 3:
						$(
							"#" +
							section_id +
							' *[data-video-element="part-3"] *[data-prevent-autoplay]'
						).addClass("active");

						break;
				}

				break;

			case "about-us":
				switch (part_idx) {
					case 1:
						$("#" + section_id + " video").removeClass("yoba-half-h");

						$("#" + section_id + ' *[data-video-element="part-parted-arrow"]')
							.css("opacity", 100)
							.addClass("active");

						//Р•СЃР»Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РЅРµ РїРѕРЅРёРјР°РµС‚, С‡С‚Рѕ РЅСѓР¶РЅРѕ СЃРєСЂРѕР»Р»РёС‚СЊ РґР°Р»СЊС€Рµ
						setTimeout(function () {
							const timeout_section_id = $(".fp-section.active").attr("id");
							const timeout_active_video_part = $(
								".fp-section.active *[data-video-parts] > *[data-video-part].ready"
							).last();
							const timeout_active_video_part_index =
								$(
									".fp-section.active *[data-video-parts] > *[data-video-part]"
								).index(timeout_active_video_part) + 1;

							if (
								timeout_section_id == "about-us" &&
								timeout_active_video_part_index == 1
							) {
								$(
									"#" +
									section_id +
									' *[data-video-element="part-parted-arrow"] a'
								).trigger("click");
							}
						}, 17000);

						break;

					case 2:
						$("#" + section_id + " video").addClass("yoba-half-h");
						$("#" + section_id + ' *[data-video-element="part-2"]').css(
							"opacity",
							100
						);
						$(
							"#" +
							section_id +
							' *[data-video-element="part-2"] *[data-prevent-autoplay]'
						).addClass("active");

						$("#" + section_id + ' *[data-video-element="part-parted-arrow"]')
							.css("opacity", 100)
							.addClass("active");

						break;
				}

				break;

			case "product-start":
				switch (part_idx) {
					case 1:
						setTimeout(function () {
							playVideoToPart(section_id, 2);
						}, 150);

						break;

					case 2:
						$("#" + section_id + ' *[data-video-element="part-2"]').css(
							"opacity",
							100
						);
						$("#" + section_id + ' *[data-video-element="pin-2"]').css(
							"opacity",
							100
						);

						break;

					default:
						$(
							"#" + section_id + ' *[data-video-element="pin-' + part_idx + '"]'
						).css("opacity", 100);
				}

				break;

			case "bespoke-expierence-start":
			case "product-craftsmanship":
			case "technology-partner":
				$(
					"#" + section_id + ' *[data-video-element="part-' + part_idx + '"]'
				).css("opacity", 100);
				$(
					"#" +
					section_id +
					' *[data-video-element="part-1"] *[data-prevent-autoplay]'
				).addClass("active");

				$("#" + section_id + ' *[data-video-element="part-arrow"]')
					.css("opacity", 100)
					.addClass("active");
				$("#" + section_id + ' *[data-video-element="part-parted-arrow"]')
					.css("opacity", 100)
					.addClass("active");

				break;

			case "technology-modules":
				$(".fp-section *[data-video-element-bg]").removeClass("active");
				$("#" + section_id + ' *[data-video-element="part-parted-arrow"]')
					.css("opacity", 100)
					.addClass("active");

				$(
					"#" + section_id + ' *[data-video-element-bg="bg-' + part_idx + '"]'
				).addClass("active");
				$(
					"#" + section_id + ' *[data-video-element="part-' + part_idx + '"]'
				).css("opacity", 100);
				$(
					"#" + section_id + ' *[data-video-element="pin-' + part_idx + '"]'
				).css("opacity", 100);

				break;
		}
	}

	//РђРЅРёРјРёСЂРѕРІР°РЅРёРµ СЌР»РµРјРµРЅС‚РѕРІ РІРЅСѓС‚СЂРё СЌС‚Р°Р¶Р° РїСЂРё СЃРєСЂРѕР»Р»Рµ РёР»Рё СЃР»Р°Р№РґРµСЂ
	function animateElements(
		section_id,
		scrolled_percentage_raw = 0,
		scroll_direction = null
	) {
		let scrolled_percentage = scrolled_percentage_raw * 100;

		if (!scroll_direction) {
			if (scrolled_percentage_raw == 1) {
				scroll_direction = -1;
			} else {
				scroll_direction = 1;
			}
		}

		animateElementsReset();

		switch (section_id) {
			case "bespoke-expierence":
			case "bespoke-expierence-2":
			case "product-2":
				$("#" + section_id + ' *[data-video-element="part-1"]').css(
					"opacity",
					100
				);
				$("#" + section_id + ' *[data-video-element="part-arrow"]')
					.css("opacity", 100)
					.addClass("active");

				break;

			case "product-3":
				$("#" + section_id + ' *[data-video-element="part-1"]').css(
					"opacity",
					100
				);
				$(
					"#" +
					section_id +
					' *[data-video-element="part-1"] *[data-prevent-autoplay]'
				).addClass("active");
				$("#" + section_id + ' *[data-video-element="part-arrow"]')
					.css("opacity", 100)
					.addClass("active");

				break;

			case "dealerships":
				$("#" + section_id + ' *[data-video-element="part-1"]').css(
					"opacity",
					100
				);
				$(
					"#" +
					section_id +
					' *[data-video-element="part-1"] *[data-prevent-autoplay]'
				).addClass("active");
				$("#" + section_id + ' *[data-video-element="part-arrow"]')
					.css("opacity", 100)
					.addClass("active");

				break;

			case "technology":
				if (
					video_finish_checker_interval &&
					typeof video_finish_checker_interval !== undefined
				) {
					window.clearInterval(video_finish_checker_interval);
				}

				video_finish_checker_interval = setInterval(
					videoFinishCheckerInterval,
					100
				);

				break;

			case "bespoke-expierence-gallery":
				$(".fp-section.active *[data-slide-colors]").addClass("active");
				$(".fp-section.active *[data-slide-colors]").css("opacity", "100%");

				break;
		}
	}

	function setCookie(name, value, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}

	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
});
