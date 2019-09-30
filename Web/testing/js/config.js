"use strict";

window.onload = function() {
  initTheFamilyCakes();
};

function initTheFamilyCakes() {
  /// Main variables
  var mainContainer = $(".main-container");
  var loginIntroText =
    "<h1>Área de Utilizador</h1><p>Por favor insira os seus dados em baixo ou registe-se connosco.</p>";
  var registIntroText =
    "<h1>Área de Utilizador</h1><p>Por favor insira os seus dados em baixo para efectuar o seu registo connosco.</p>";
  var currentOverlayWindow;

  //////////////////////////////////////
  /// MAIN INTERACTIONS
  //////////////////////////////////////

  /// SCROLL INTERACTIONS

  /// FIXED MENU ON SCROLL
  function validatePositions() {
    if ($(window).scrollTop() > 0) {
      $(".menu-container").addClass("menuOnTop");
      $(".logo2").addClass("logoOpacityOn");
      $(".logo").css({ opacity: "0" });
      $(".main-menu").addClass("main-menu-onTop");
      $(".main-menu nav a").css({ "line-height": "65px" });
      $(".user[before]").css({ "line-height": "110px" });
      $(".user").addClass("userIconTop");
    } else if ($(window).scrollTop() <= 100) {
      $(".menu-container").removeClass("menuOnTop");
      $(".logo2").removeClass("logoOpacityOn");
      $(".logo").css({ opacity: "1" });
      $(".main-menu").removeClass("main-menu-onTop");
      $(".main-menu nav a").css({ "line-height": "30px" });
      $(".user").removeClass("userIconTop");
    }

    if ($(window).scrollTop() > 50) {
      $(".backToTop").show();
      $(".mouse").hide();
    } else {
      $(".backToTop").hide();
      $(".mouse").show();
    }
  }

  validatePositions();

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $(".menu-container").addClass("menuOnTop");
      $(".logo2").addClass("logoOpacityOn");
      $(".logo").css({ opacity: "0" });
      $(".main-menu").addClass("main-menu-onTop");
      $(".main-menu nav a").css({ "line-height": "65px" });
      $(".user[before]").css({ "line-height": "110px" });
      $(".user").addClass("userIconTop");
    } else if ($(window).scrollTop() <= 100) {
      $(".menu-container").removeClass("menuOnTop");
      $(".logo2").removeClass("logoOpacityOn");
      $(".logo").css({ opacity: "1" });
      $(".main-menu").removeClass("main-menu-onTop");
      $(".main-menu nav a").css({ "line-height": "30px" });
      $(".user").removeClass("userIconTop");
    }

    if ($(window).scrollTop() > 50) {
      $(".backToTop").show();
      $(".mouse").hide();
    } else {
      $(".backToTop").hide();
      $(".mouse").show();
    }
  });

  //// BACK TO TOP

  $(".backToTop, .logo, .logo2").click(function() {
    $(window).scrollTop(0);
  });

  /////////////////////////////////////////////
  /// ALERT WINDOW
  //////////////////////////////////////////////
  function popAlertWindow(alertMessage) {
    mainContainer.append(
      '<div class="overlayWindow" id="errorMsgOverlayWindow"><div class="alertWindow"><p>' +
        alertMessage +
        '</p><div class="okButton">OK</div></div></div>'
    );

    $(".okButton").click(function() {
      removeOverlayWindow("#errorMsgOverlayWindow");
    });

    disableScroll(true);
  }

  /////////////////////////////////////////////
  /// NOTIFICATION WINDOW
  //////////////////////////////////////////////
  function notificationWindow(notificationMessage) {
    mainContainer.append(
      '<div class="overlayWindow" id="notificationWindow"><div class="alertWindow"><p>' +
        notificationMessage +
        "</p></div></div>"
    );

    $("#notificationWindow")
      .delay(1000)
      .animate({ opacity: 0 }, 200, function() {
        removeOverlayWindow("#notificationWindow");
      });

    disableScroll(true);
  }

  ///////////////////////////////////////////////
  ///MENU
  ///////////////////////////////////////////////

  var menuItem;
  var sectionOn;

  $(".side-menu nav a, .main-menu nav a, .home-content .items p span").click(
    function(e) {
      validatePositions();
      openCloseSideMenu(true);

      sectionOn = e.target.id;
      menuItem = sectionOn.split("_")[0];

      if (menuItem === "home") {
        $("body,html").animate({ scrollTop: 0 }, 1000, "linear");
      } else if (menuItem === "login") {
        openLoginForm();
      } else {
        $("body,html").animate(
          { scrollTop: $("#" + menuItem).offset().top - 50 },
          1000,
          "linear"
        );
      }
    }
  );

  /// SIDE MENU

  var sideMenu = $(".side-menu");

  $(".open-menu").click(function() {
    openCloseSideMenu(false);
  });

  function openCloseSideMenu(sideMenuOpen) {
    if (!sideMenuOpen) {
      sideMenuOpen = true;
      sideMenu.removeClass("hide");
      sideMenu.addClass("show");
    } else {
      sideMenuOpen = false;
      sideMenu.removeClass("show");
      sideMenu.addClass("hide");
    }
  }

  $("#close_sideMenu").click(function() {
    openCloseSideMenu(true);
  });

  ///////////////////////////////////////////////
  ///// MENU   (final)
  ///////////////////////////////////////////////

  //////////////////////////////////////////////////////
  ////// SOCIAL PAGES
  //////////////////////////////////////////////////////
  $(".facebook").click(function() {
    window.open("https://www.facebook.com/thefamilycakes/", "_blank");
  });

  $(".twitter").click(function() {
    window.open("https://www.facebook.com/thefamilycakes/", "_blank");
  });

  $(".pinterest").click(function() {
    window.open("https://pt.pinterest.com/thefamilycakes/", "_blank");
  });

  $(".instagram").click(function() {
    window.open("https://www.instagram.com/thefamilycakes/", "_blank");
  });

  $(".blogSpot").click(function() {
    window.open("http://thefamilycakes.blogspot.pt/", "_blank");
  });

  //////////////////////////////////////////////////////
  ////// SOCIAL PAGES (final)
  //////////////////////////////////////////////////////

  //////////////////////////////////////////////////////
  ////// OVERLAY WINDOW FUNCTIONS
  //////////////////////////////////////////////////////
  function removeOverlayWindow(overlayWindow) {
    if ($(overlayWindow).length > 0) {
      $(overlayWindow).animate({ opacity: 0 }, 200, function() {
        $(overlayWindow).remove();

        disableScroll(false);
      });
    }
  }

  function showOverlayWindow() {
    if ($(".overlayWindow").length > 0) {
      $(".overlayWindow").animate({ opacity: 1 }, 200);
    }

    disableScroll(true);
  }
  //////////////////////////////////////////////////////
  ////// OVERLAY WINDOW FUNCTIONS  (final)
  //////////////////////////////////////////////////////

  //////////////////////////////////////////////////////
  ////// DISABLES OR ENABLES PAGE SCROLL
  //////////////////////////////////////////////////////

  function disableScroll(showOff) {
    if (showOff) {
      $("html,body").css("overflow-y", "hidden");
    } else {
      $("html,body").css("overflow-y", "auto");
    }
  }

  //////////////////////////////////////////////////////
  ////// DISABLES OR ENABLES PAGE SCROLL (final)
  //////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  ///// USER INFO WIDGET
  ////////////////////////////////////////////////////

  // Get User Info
  var logedIn = false;
  var useremail;
  var userpassword;
  var userDetails = {};

  /*OPEN LOGIN WINDOW*/
  $(".user").click(function() {
    openLoginForm();
  });

  function openLoginForm() {
    var html = "";

    if (!logedIn) {
      html =
        '<div class="overlayWindow" id="loginOverlay">' +
        '<ul class="userLogin">' +
        "<li>" +
        loginIntroText +
        "</li>" +
        '<li><input id="userEmail" name="userEmail" autocomplete="on" type="email" placeholder="eMail..."/></li>' +
        '<li><input id="userPassword" name="userPassword" type="password" placeholder="password..."/></li>' +
        '<li><div class="cancel" id="cancelLogin">Cancelar</div><div class="login" id="login">Entrar</div><div class="regist" id="registUserPage">Registar</div></li>' +
        "</ul>";

      mainContainer.append(html);
      disableScroll(true);

      $("#cancelLogin").click(cancelOverlay);
      $("#login").click(validateLogin);
      $("#registUserPage").click(registUser);
    } else {
      html =
        '<div class="overlayWindow" id="userAreaOverlay">' +
        '<ul class="userInformation">' +
        "<li><h1>Área de Utilizador</h1><p>Pode consultar e editar todos os seus dados de utilizador demonstrados em baixo.</p></li>" +
        "<li><strong>Nome :</strong> " +
        userDetails.username +
        " " +
        userDetails.lastname +
        '<div class="edit"></div></li>' +
        "<li><strong>Telefone :</strong> " +
        userDetails.phone +
        '<div class="edit"></div></li>' +
        "<li><strong>Email :</strong> " +
        userDetails.useremail +
        '<div class="edit"></div></li>' +
        "<li><strong>Morada :</strong> " +
        userDetails.adress +
        '<div class="edit"></div></li>';

      if (userDetails.adressfat) {
        html +=
          "<li><strong>Morada de facturação :</strong>" +
          userDetails.adressfat +
          '<div class="edit"></div></li>';
      }

      if (userDetails.nif) {
        html +=
          "<li><strong>NIF :</strong> " +
          userDetails.nif +
          ' <div class="edit"></div></li>';
      }

      if (userDetails.company) {
        html +=
          "<li><strong>Empresa :</strong> " +
          userDetails.company +
          ' <div class="edit"></div></li>';
      }

      if (userDetails.newsletter === "off") {
        html +=
          '<li><strong>Subscrição à nossa newsletter :</strong> Não <div class="edit"></div></li>';
      } else {
        html +=
          '<li><strong>Subscrição à nossa newsletter :</strong> Sim <div class="edit"></div></li>';
      }

      if (userDetails.orders !== "") {
        var htmlOrdersList =
          "<li><strong>Histórico de encomendas:</strong></li>";
        htmlOrdersList += '<li><ul class="userInfoOrders">';

        userDetails.orders.forEach(function(ele) {
          var itemDate = new Date(ele.date);

          htmlOrdersList +=
            "<li>Feita a: " +
            itemDate.getUTCDate() +
            "/" +
            itemDate.getUTCMonth() +
            "/" +
            itemDate.getUTCFullYear() +
            " pelas :" +
            itemDate.getUTCHours() +
            ":" +
            itemDate.getUTCMinutes() +
            ":" +
            itemDate.getUTCSeconds() +
            "</li>";

          ele.orderList.forEach(function(ele) {
            htmlOrdersList += "<li>" + JSON.stringify(ele.orderItem) + "</li>";
          });
        });

        htmlOrdersList += "</ul></li>";

        html += htmlOrdersList;
      }

      html +=
        '<li><div class="cancel" id="cancelUserInfo">Fechar</div><div class="regist" id="editUserInfo">Editar Dados</div><div class="logout" id="logoutUser">Logout</div></li>';

      html += "</ul>";

      mainContainer.append(html);
      disableScroll(true);

      $("#cancelUserInfo").click(cancelOverlay);
      $("#editUserInfo").click(registUser);
      $("#logoutUser").click(logoutUser);
    }
  }

  ///////////////////////////////////
  ///REGISTRATION
  ///////////////////////////////////

  var registrationOn = false;

  function registUser() {
    var html =
      '<div class="overlayWindow" id="registOverlay">' +
      '<ul class="userRegist">' +
      "<li>" +
      registIntroText +
      "</li>" +
      '<li><input id="userName" name="userName" autocomplete="on" type="text" placeholder="Primeiro Nome"/><input id="userLastName" name="userLastName" autocomplete="on" type="text" placeholder="Último Nome"/><li>' +
      '<li><input id="userAdress" name="userAdress" autocomplete="on" type="text" placeholder="Morada linha 1"/>' +
      '<li><input id="userAdress2" name="userAdress2" autocomplete="on" type="text" placeholder="Morada linha 2"/>' +
      '<li><input id="userFatAdress" name="userFatAdress" autocomplete="on" type="text" placeholder="Morada de facturação linha 1"/>' +
      '<li><input id="userFatAdress2" name="userFatAdress2" autocomplete="on" type="text" placeholder="Morada de facturação linha 2"/>' +
      '<li><input id="userCompany" name="userCompany" autocomplete="on" type="text" placeholder="Nome da sua empresa"/>' +
      '<li><input id="userNif" name="userNif" autocomplete="on" type="number" placeholder="NIF"/>' +
      '<li><input id="userPhone" name="userPhone" autocomplete="on" type="number" placeholder="Telefone"/>' +
      '<li><input id="userMail" name="userMail" autocomplete="on" type="email" placeholder="eMail"/>' +
      '<li><input id="userPasswordReg" name="userPasswordReg" autocomplete="on" type="password" placeholder="Password"/>' +
      '<li><input id="userPasswordRegRep" name="userPasswordRegRep" autocomplete="on" type="password" placeholder="Repita a sua password"/>' +
      '<li><label>Deseja receber a nossa newsletter mensal?</label><input id="userNewsletter" name="userNewsletter" autocomplete="on" type="checkbox"/>' +
      '<li><div class="cancel" id="cancelRegist">Cancelar</div><div class="regist" id="registUser">Registar</div></li>' +
      "</ul>";

    mainContainer.append(html);
    disableScroll(true);

    registrationOn = true;

    $("#cancelRegist").click(cancelOverlay);
    $("#registUser").click(processRegistration);
  }

  ///////////////////////////////////
  /// Cancel Login or registration
  ///////////////////////////////////
  function cancelOverlay(e) {
    switch (e.target.id) {
      case "cancelRegist":
        currentOverlayWindow = $("#registOverlay");
        break;

      case "cancelLogin":
        currentOverlayWindow = $("#loginOverlay");

        break;
      case "cancelUserInfo":
        currentOverlayWindow = $("#userAreaOverlay");
        break;
      case "cancelOrderMail":
        currentOverlayWindow = $("#orderMailOverlay");
        break;
    }

    removeOverlayWindow(currentOverlayWindow);
  }

  ///////////////////////////
  /////LOGOUT USER
  //////////////////////////

  function logoutUser() {
    $.ajax({
      type: "POST",
      url: "config/killSession.php",
      success: function() {
        currentOverlayWindow = $("#userAreaOverlay");
        removeOverlayWindow(currentOverlayWindow);
        checkSession();
      }
    });
  }

  /////////////////////////
  /// VALIDATE LOGIN
  /////////////////////////
  function validateLogin() {
    useremail = $("#userEmail").val();
    userpassword = $("#userPassword").val();

    if (useremail !== "" && userpassword !== "") {
      getUserInfo(useremail, userpassword);
    } else {
      popAlertWindow("Verifique os dados preenchidos.");
    }
  }

  /////////////////////////////////////////////
  ///// GET USER FROM DB
  ////////////////////////////////////////////
  function getUserInfo(useremail, userpassword) {
    $.ajax({
      type: "POST",
      url: "config/userinfo.php",
      data: { useremail: useremail, userpassword: userpassword },

      success: function(data) {
        if (data !== "error") {
          userDetails = JSON.parse(data);

          if (userDetails.orders === "") {
            userDetails.orders = [];
          } else {
            userDetails.orders = JSON.parse(userDetails.orders);
          }

          var welComeMessage =
            "Bem-vindo/a " + userDetails.username + " " + userDetails.lastname;

          notificationWindow(welComeMessage);

          logedIn = true;

          $(".user").addClass("userActive");

          removeOverlayWindow($("#loginOverlay"));
        } else {
          logedIn = false;

          popAlertWindow(data);
        }
      }
    });
  }

  ///////////////////////////////////////////
  ///// REGISTRATION
  ///////////////////////////////////////////
  function processRegistration() {
    var username = $("#userName").val();
    var userLastname = $("#userLastName").val();
    var userAdress = $("#userAdress").val() + " " + $("#userAdress2").val();
    var userAdressFat =
      $("#userFatAdress").val() + " " + $("#userFatAdress2").val();
    var userNif = $("#userNif").val();
    var userPhoneNumber = $("#userPhone").val();
    var userCompany = $("#userCompany").val();
    var userEmail = $("#userMail").val();
    var userRegPassword = $("#userPasswordReg").val();
    var userRegPasswordRep = $("#userPasswordRegRep").val();
    var userNewsletter = $("#userNewsletter").val();
    var fieldsList = [
      username,
      userLastname,
      userEmail,
      userPhoneNumber,
      userRegPassword,
      userRegPasswordRep
    ];
    var validation = true;

    for (var i = 0; i < fieldsList.length; i++) {
      if (fieldsList[i] === "") {
        validation = false;
      }
    }

    if (userRegPassword !== userRegPasswordRep) {
      validation = false;
    }

    if (validation) {
      var userRegInfo = {
        username: username,
        userLastname: userLastname,
        userAdress: userAdress,
        userAdressFat: userAdressFat,
        userNif: userNif,
        userCompany: userCompany,
        userEmail: userEmail,
        userPhoneNumber: userPhoneNumber,
        userRegPassword: userRegPassword,
        userNewsletter: userNewsletter
      };

      $.ajax({
        type: "POST",
        url: "config/regist.php",
        data: userRegInfo,
        success: function(data) {
          popAlertWindow(String(data.split("_")[0]));
          if (data.split("_")[1] !== "error") {
            clearForm("#userRegist");
          }
        }
      });
    } else {
      popAlertWindow("Por favor, confirme todos os campos obrigatórios.");
    }
  }

  ////CHECK IF SESSION IS ON OR OFF
  function checkSession() {
    $.ajax({
      type: "POST",
      url: "config/checkSession.php",
      success: function(data) {
        if (data !== "0") {
          userDetails = JSON.parse(data);

          if (userDetails.orders === "") {
            userDetails.orders = [];
          } else {
            userDetails.orders = JSON.parse(userDetails.orders);
          }

          var welComeMessage =
            "Bem-vindo/a " + userDetails.username + " " + userDetails.lastname;

          notificationWindow(welComeMessage);

          logedIn = true;

          $(".user").addClass("userActive");
        } else {
          logedIn = false;
          userDetails = {};
          $(".user").removeClass("userActive");
        }
      }
    });
  }

  checkSession();

  /////////////////////////////////////////
  ///// CLEAR FORMS
  ////////////////////////////////////////
  function clearForm(formId) {
    $(formId)
      .find("input")
      .val("");
  }
  ////////////////////////////////////////////////////
  ///// USER INFO WIDGET   (final)
  ///////////////////////////////////////////////////

  ////////////////////////////////////////////
  //// ORDERS WIDGET
  ////////////////////////////////////////////
  var orderItems = [];
  var ordersData;
  var currentStep = 1;
  var stepsContainer = $(".steps");
  var redStep;
  var orderObj = {};
  var attachedFiles = [];
  var emptyList = true;

  /// EVENT FOR SENDING AND ATTACHING
  $("#sendOrder").click(sendOrder);
  $("#attachImg").click(attachImg);

  /// GET ORDERS DATA
  $.getJSON("data/orders.json", function(data) {
    ordersData = data;
    buildOrders();
  });

  /// START BUILDING WIDGET
  function buildOrders() {
    var items = Object.keys(ordersData);

    items.forEach(function(key) {
      orderItems.push(ordersData[key].item);
      $("#step1-selection").append(
        "<option>" + ordersData[key].item + "</option>"
      );
    });

    $("#step1-selection").bind("change", buildNextStep);
  }

  /// BUILD NEXT STEPS
  function buildNextStep(e) {
    if (e.target.id === "step1-selection" && currentStep > 1) {
      currentStep = 1;
      $(stepsContainer)
        .find(".step1")
        .nextAll("div")
        .remove();
    }

    currentStep++;
    var currentOrderSelected =
      ordersData[
        Object.keys(ordersData)[$("#step1-selection")[0].selectedIndex - 1]
      ];

    if (
      currentOrderSelected &&
      currentStep - 1 <= Object.keys(currentOrderSelected.steps).length
    ) {
      var splitStep = currentOrderSelected["step" + currentStep];

      redStep = "step" + currentStep;

      //// START BUILDING STEP HTML TO APPEND TO STEPS CONTAINER
      var currentOrderStepType = currentOrderSelected.steps[redStep].type;

      var html =
        '<div class="step"><ul>' +
        "<li><span>" +
        currentStep +
        "</span>" +
        "<span>" +
        currentOrderSelected.steps[redStep].content +
        "</span><hr></li></ul>";

      //// INCREMENT CURRENT STEP HTML DEPPEDING OF THE STEP TYPE PROVIED FROM JSON
      if (currentOrderStepType === "select") {
        html =
          html +
          '<select id="step' +
          currentStep +
          '-selection"><option>selecione uma opção...</option></select></div>';
      } else if (currentOrderStepType === "number") {
        html =
          html +
          '<input id="step' +
          currentStep +
          '-selection" name="step' +
          currentStep +
          '" type="number" min="1"/></div>';
      } else if (currentOrderStepType === "date") {
        html =
          html +
          '<input id="step' +
          currentStep +
          '-selection" name="step' +
          currentStep +
          '" type="date"/></div>';
      } else if (currentOrderStepType === "button") {
        html =
          html +
          '<div id="step' +
          currentStep +
          '-selection" class="finish-order">Adicionar Encomenda</div></div>'; //// TODO: REPLACE BUTTON TEXT
      }

      //// APPEND HTML RELATED TO STEP TYPE
      $(stepsContainer).append(html);

      if ($("#step" + currentStep + "-selection").attr("type") === "date") {
        $("#step" + currentStep + "-selection").datepicker();
      }

      if (currentOrderStepType === "select") {
        for (var i = 0; i < splitStep.length; i++) {
          $("#step" + currentStep + "-selection").append(
            "<option>" + splitStep[i] + "</option>"
          );
        }
      } else if (currentOrderSelected.steps[redStep].type === "button") {
        $("#step" + currentStep + "-selection").click(resetAndAddItem);
      }

      /// PREPARE NEXT STEPS AND EVENTS
      var previousElement = "#step" + (currentStep - 1) + "-selection";
      var currentElement = "#step" + currentStep + "-selection";

      $(previousElement).unbind("change", buildNextStep);

      if ($(currentElement)[0].tagName !== "INPUT") {
        $("#step1-selection," + currentElement).bind("change", buildNextStep);
      } else {
        $(currentElement).bind("keydown", function(e) {
          buildNextStep(e);
          $(currentElement).unbind("keydown");
        });
        $("#step1-selection," + currentElement).bind("change", buildNextStep);
      }

      //// PUT IN PLACE NEXT STEP
      $(currentElement)
        .parent()
        .css({ opacity: 1 });
    }
  }

  //// OPEN ORDER NOTE
  function resetAndAddItem() {
    addItemToList();

    $("#step1-selection").val("selecione uma opção...");
    $("#step1-selection").trigger("change");
  }

  /// BUILD ORDER LIST BASED ON STEP TYPES
  function addItemToList() {
    var orderItems = $(".steps").find("select,input");
    var orderItemText = "";

    for (var i = 0; i < orderItems.length; i++) {
      if (orderItems[i].type === "date") {
        orderItemText = orderItemText + " " + orderItems[i].value;
      } else if (orderItems[i].type === "number") {
        orderItemText =
          orderItemText + " " + orderItems[i].value + " " + "pessoas,";
      } else {
        orderItemText = orderItemText + orderItems[i].value + "," + " ";
      }
    }

    if ($(".emptyListItem").length >= 1) {
      $(".emptyListItem").remove();
    }

    $(".myOrderList ul").append(
      '<li><div class="itemNumber"></div><p>' +
        orderItemText +
        '</p><div class="clearItem"></div></li>'
    );

    setListItemsNumb();

    $(".clearItem").bind("click", function(e) {
      $(e.target)
        .parent()
        .remove();
      setListItemsNumb();
    });
  }

  ///SET LIST ITEMS ORDER NUMBER
  function setListItemsNumb() {
    for (var ele = 0; ele < $(".itemNumber").length; ele++) {
      $(".itemNumber")[ele].innerHTML = ele + 1;
    }

    emptyList = false;

    if ($(".itemNumber").length <= 0 && $(".emptyListItem").length < 1) {
      $(".myOrderList ul").append(
        '<li class="emptyListItem">A sua lista encontra-se vazia</li>'
      );
      emptyList = true;
    }
  }

  /// GET ORDER LIST
  function getOrderList() {
    var orderList = [];

    $(".myOrderList ul li").each(function(index, ele) {
      var itemContent = {
        orderItem: $(ele)
          .find("p")
          .html()
      };

      orderList.push(itemContent);
    });

    return orderList;
  }

  /// GET ORDER NOTES
  function getOrderNotes() {
    return $("#orderDetails").val();
  }

  /// SEND ORDER
  function sendOrder() {
    if (emptyList) {
      popAlertWindow(
        "Encontra-se com a sua lista vazia, por favor adicione elementos à sua lista para proceder ao envio."
      );
    } else {
      orderObj = {
        date: new Date().getTime(),
        orderList: getOrderList(),
        orderNotes: getOrderNotes()
      };

      sendOrderMail(orderObj);
    }
  }

  /// ATTACH IMGS TO ORDER
  $("#anexOrder").click(attachImg);
  function attachImg() {
    $("#attachOrderImg").click();
    $("#attachOrderImg").bind("change", getAttachFiles);
  }

  function getAttachFiles() {
    var selectedFiles = $("#attachOrderImg").get(0).files;

    for (var i = 0; i < selectedFiles.length; i++) {
      attachedFiles.push(selectedFiles[i]);
    }

    $(".attachImgInfo span").html(selectedFiles.length);
  }

  //// SEND ORDER MAIL
  function sendOrderMail(orderObject) {
    var orderUserName;
    var orderUserEmail;
    var orderUserPhone;
    var html = "";

    if (logedIn) {
      html =
        '<div class="overlayWindow" id="orderMailOverlay">' +
        '<ul class="orderSend">' +
        "<li><h1>A sua lista</h1></li>" +
        "<li><strong>" +
        userDetails.username +
        " " +
        userDetails.lastname +
        "</strong>, está prestes a enviar a sua lista de encomenda, reveja a mesma e confirme.</li><li></li>";

      orderObject.orderList.forEach(function(ele, index) {
        var itemNumber = index + 1;
        html += "<li>" + itemNumber + " - " + ele.orderItem + "</li>";
      });

      html += "<li><strong>Decoração/Temática</strong></li>";

      html += "<li>" + orderObject.orderNotes + "</li>";

      html +=
        '<li><div class="cancelOrderSend" id="cancelOrderMail">Cancelar</div><div class="orderMail" id="SendOrderMail">Enviar</div></li>';

      html += "</ul>";

      mainContainer.append(html);
      disableScroll(true);

      orderUserName = userDetails.username + " " + userDetails.lastname;
      orderUserEmail = userDetails.useremail;
      orderUserPhone = userDetails.phone;
    } else {
      html =
        '<div class="overlayWindow" id="orderMailOverlay">' +
        '<ul class="orderSend">' +
        "<li><h1>Encomenda</h1></li>" +
        "<li>Está prestes a enviar a sua lista de encomenda. Por favor, deixe-nos o seu nome em baixo.</li>" +
        '<li><input name="orderName" id="orderName" type="text" placeholder="Primeiro e último nome..."/></li>' +
        '<li><input name="orderPhone" id="orderPhone" type="text" placeholder="Telefone..."/></li>' +
        '<li><input name="orderUserEmail" id="orderUserEmail" type="email" placeholder="Email..."/></li>' +
        "<li><strong>Lista: </strong></li>";

      orderObject.orderList.forEach(function(ele, index) {
        var itemNumber = index + 1;
        html += "<li>" + itemNumber + " - " + ele.orderItem + "</li>";
      });

      html += "<li><strong>Decoração/Temática</strong></li>";

      html += "<li>" + orderObject.orderNotes + "</li>";

      html +=
        '<li><div class="cancelOrderSend" id="cancelOrderMail">Cancelar</div><div class="orderMail" id="SendOrderMail">Enviar</div></li>';

      html += "</ul>";

      mainContainer.append(html);
      disableScroll(true);

      $("#orderName").focusout(function() {
        orderUserName = $("#orderName").val();
      });

      $("#orderPhone").focusout(function() {
        orderUserPhone = $("#orderPhone").val();
      });

      $("#orderUserEmail").focusout(function() {
        orderUserEmail = $("#orderUserEmail").val();
      });
    }

    $("#cancelOrderMail").click(cancelOverlay);

    $("#SendOrderMail").click(function() {
      if (
        orderUserName !== "" &&
        orderUserEmail !== "" &&
        orderUserPhone !== ""
      ) {
        var orderDate = new Date(orderObject.date);
        var orderDateFormat =
          orderDate.getUTCDate() +
          "/" +
          orderDate.getUTCMonth() +
          "/" +
          orderDate.getUTCFullYear();
        var orderTimeFormat =
          orderDate.getUTCHours() +
          ":" +
          orderDate.getUTCMinutes() +
          ":" +
          orderDate.getUTCSeconds();
        var orderMessage =
          "Encomenda feita no site na data: " +
          orderDateFormat +
          " às: " +
          orderTimeFormat +
          "\n\n";

        orderObject.orderList.forEach(function(ele, index) {
          index++;
          orderMessage += " " + index + " - " + ele.orderItem + "\n\n";
        });

        orderMessage += "\nNOTAS: " + orderObject.orderNotes;

        var orderMessageObj = {
          username: orderUserName,
          usermail: orderUserEmail,
          userphone: orderUserPhone,
          orderMessage: orderMessage
        };

        var orderMailData = new FormData();

        orderMailData.append("username", orderMessageObj.userName);
        orderMailData.append("usermail", orderMessageObj.usermail);
        orderMailData.append("userphone", orderMessageObj.userphone);
        orderMailData.append("orderMessage", orderMessageObj.orderMessage);
        orderMailData.append(
          "file_attach",
          $("input[name=attachOrderImg]")[0].files[0]
        );

        $.ajax({
          type: "POST",
          url: "config/ordersToMail.php",
          data: orderMailData,
          processData: false,
          contentType: false,
          dataType: "json",
          success: function(orderObject) {
			if(orderObject.type === "message"){
				saveOrder(orderMessageObj);
				$("#cancelOrderMail").click();
			}else{
				popAlertWindow(orderObject.text);
			}
          }
        });
      }
    });
  }

  /// SAVE ORDER
  function saveOrder(orderObj) {
    if (logedIn) {
      if (typeof Storage !== "undefined") {
        popAlertWindow(
          "A sua encomenda foi enviada e será guardada na sua lista de encomendas tanto local como na sua conta de utilizador."
        );
        saveOrderLocaly(new Date().getMilliseconds(), JSON.stringify(orderObj));
      } else {
        popAlertWindow(
          "A sua encomenda foi enviada mas o seu browser não permite guardar conteúdos localmente, a sua encomenda será guardada apenas na sua conta de utilizador."
        );
      }

      userDetails.orders.push(orderObj);

      saveOrderOnBd(JSON.stringify(userDetails.orders));
    } else {
      if (typeof Storage !== "undefined") {
        popAlertWindow(
          "A sua encomenda foi envaida e será guardada apenas localmente, para guardar na sua conta de utilizador por favor faça o seu login."
        );

        saveOrderLocaly(new Date().getMilliseconds(), JSON.stringify(orderObj));
      } else {
        popAlertWindow(
          "A sua encomenda foi enviada mas o seu browser não permite guardar conteúdos localmente, a sua encomenda será apenas enviada sem poder ser guardada, por favor faça login ou registe-se connosco de forma a conseguir com que as suas encomendas fiquem devidamente guardadas após envio."
        );
      }
    }
  }

  //// SAVE ORDER ON BD
  function saveOrderOnBd(orderObject) {
    var saveToBdObj = {
      useremail: userDetails.useremail,
      orderObj: orderObject
    };

    $.ajax({
      type: "POST",
      url: "config/saveOrderBd.php",
      data: saveToBdObj,
      success: function(data) {
        console.log(data);
      }
    });
  }

  //// SAVE ORDER ON LOCAL STORAGE
  function saveOrderLocaly(key, value) {
    localStorage.setItem(key, value);
  }

  ////////////////////////////////////////////
  //// ORDERS  (final)
  ////////////////////////////////////////////

  /////////////////////////////////////////////
  ///GALERY WIDGET
  /////////////////////////////////////////////
  var galleryColumns = 5;

  if ($(window).width() >= 992) {
    galleryColumns = 5;
  } else {
    galleryColumns = 2;
  }

  var galleryList;
  var galleryData;
  var galleryListFiltered;
  var currentList;
  var imageCount = 0;
  var galleryImageReduced;
  var galleryFolder = "images/";
  var totalImages;
  var galleryCategories;
  var moreImages = false;
  var galleryIdCount = 0;
  var defaultFilter = "Tudo...";
  var currentFilter;
  var loadedImages = 20;

  /// APPEND COLUMNS AS NUMBER SET ABOVE
  for (var i = 0; i < galleryColumns; i++) {
    $(".galleryContainer").append(
      '<div class="galleryColumn" id="column_' + i + '"></div>'
    );
  }

  /// GET AND SET DATA FROM JSON FILE
  $.getJSON("data/galery.json", function(json) {
    galleryData = json;
    totalImages = galleryData.galery.items.content.length;
    galleryList = galleryData.galery.items.content;
    galleryCategories = galleryData.galery.items.categories;

    /// BUILD FILTERS
    $(galleryCategories).each(function(item) {
      $("#galery .filterBox select").append(
        "<option>" + galleryCategories[item] + "</option>"
      );
    });

    /// DEFINE LOADED STATUS
    $(galleryList).each(function() {
      this.loaded = false;
    });

    currentList = galleryList;
    currentFilter = defaultFilter;

    fillGallery(currentFilter);
  });

  /// FILL GALLERY DOM
  function fillGallery(categorieData) {
    if (moreImages === false) {
      $(".galleryColumn").empty();
      galleryIdCount = 0;
    }

    currentList.forEach(function(item, index) {
      if (item.loaded === false && galleryIdCount < loadedImages) {
        var currentColumn;

        if (imageCount < galleryColumns) {
          currentColumn = $(".galleryColumn")[imageCount];
          imageCount++;
        } else {
          currentColumn = $(".galleryColumn")[imageCount];
          imageCount = 0;
        }

        galleryImageReduced =
          galleryFolder + item.imgUrl.split(".jpg")[0] + "_reduced.jpg";

        if (
          item.catergorie === categorieData ||
          categorieData === defaultFilter
        ) {
          $(currentColumn).append(
            '<div id="image_' +
              index +
              '" class="imagePin shadow"><img src="' +
              galleryImageReduced +
              '"/></div>'
          );
          $("#image_" + index)
            .find("img")
            .click(viemImage);
          galleryIdCount++;
          item.loaded = true;
        }
      }
    });
  }

  /// LOAD MORE IMAGES
  $("#addImgs").click(function() {
    moreImages = true;
    loadedImages = loadedImages + 20;

    if (loadedImages >= currentList.length) {
      $("#addImgs").hide();
    }

    fillGallery(currentFilter);
  });

  /// GALERY FILTER
  $(".filterBox select").change(function(e) {
    galleryListFiltered = [];
    currentFilter = e.target.value;

    /// DEFINE LOADED STATUS
    $(galleryList).each(function runList(element) {
      galleryList[element].loaded = false;

      if (
        galleryList[element].catergorie === currentFilter ||
        currentFilter === defaultFilter
      ) {
        galleryListFiltered.push(galleryList[element]);
      }
    });

    currentList = galleryListFiltered;
    loadedImages = 20;
    moreImages = false;

    if (currentList.length > 20) {
      $("#addImgs").show();
    } else {
      $("#addImgs").hide();
    }

    fillGallery(currentFilter);
  });

  /// VIEW LARGE IMAGE
  function viemImage(e) {
    var imgSource = $(e.target).attr("src");

    imgSource = imgSource.split("_reduced.jpg")[0] + ".jpg";

    $("#galery").append(
      '<div class="overlayWindow imageView" id="largeImg"><img src="' +
        imgSource +
        '"/></div>'
    );

    showOverlayWindow();

    currentOverlayWindow = $("#largeImg");

    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        $(".imageView").click();
        $("#galery").unbind("keydown");
      }
    });

    $(".imageView").click(function() {
      removeOverlayWindow(currentOverlayWindow);
    });
  }

  /////////////////////////////////////////////
  ///GALERY WIDGET (final)
  /////////////////////////////////////////////

  ////////////////////////////////////////////
  //// EMAIL FORM
  //////////////////////////////////////////

  $("#sendMsg").click(function(e) {
    e.preventDefault();

    var formData = $("#contactForm").serialize();

    $.ajax({
      type: "POST",
      url: "config/contact.php",
      data: formData
    })
      .done(function(data) {
        $("#subject").val("");
        $("#email").val("");
        $("#name").val("");
        $("#message").val("");

        popAlertWindow(data);
      })
      .fail(function(data) {
        popAlertWindow(data.responseText);
      });
  });

  ///////////////////////////
  //// PRIVACY POLICY
  //////////////////////////

  $("#privacyPolicy, #sidePrivacyPolicy").click(function() {
    $.get("data/privacyPolicy.txt", function(data) {
      popAlertWindow(data);
    });
  });

  ///////////////////////////
  //// CAKES INFO
  //////////////////////////

  $("#infoCakes, #sideInfoCakes").click(function() {
    $.get("data/cakeInfo.txt", function(data) {
      popAlertWindow(data);
    });
  });
}
