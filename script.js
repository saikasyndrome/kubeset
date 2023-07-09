function calculateTotalRam(formId, kaliRam, otherRam) {
  // 각 컨테이너에 대한 폼 데이터 처리 로직
  if (formId === "containerForm") {
    var kaliCount = parseInt(document.getElementById(formId + "kaliCount").value);
    var rockyCount = parseInt(document.getElementById(formId + "rockyCount").value);
    var ubuntuCount = parseInt(document.getElementById(formId + "ubuntuCount").value);
    var centosCount = parseInt(document.getElementById(formId + "centosCount").value);
    var totalRam = kaliCount * kaliRam + (rockyCount + ubuntuCount + centosCount) * otherRam;

    document.getElementById(formId + "totalRam").value = totalRam;

    var ramWarning = document.getElementById(formId + "ramWarning");
    var submitButton = document.getElementById(formId + "submitButton");

    if (totalRam > 32) {
      ramWarning.innerHTML = "Total RAM should not exceed 32GB.";
      submitButton.disabled = true;
    } else {
      ramWarning.innerHTML = "";
      submitButton.disabled = false;
    }

    // 수정된 부분: 첫 번째 컨테이너 데이터 서버로 전송
    if (!submitButton.disabled) {
      sendDataToServer(formId, kaliCount, rockyCount, ubuntuCount, centosCount);
    }
  } else if (formId === "containerForm2") {
    var kaliCount2 = parseInt(document.getElementById(formId + "kaliCount").value);
    var rockyCount2 = parseInt(document.getElementById(formId + "rockyCount").value);
    var ubuntuCount2 = parseInt(document.getElementById(formId + "ubuntuCount").value);
    var centosCount2 = parseInt(document.getElementById(formId + "centosCount").value);
    var totalRam2 = kaliCount2 * kaliRam + (rockyCount2 + ubuntuCount2 + centosCount2) * otherRam;

    document.getElementById(formId + "totalRam").value = totalRam2;

    var ramWarning2 = document.getElementById(formId + "ramWarning");
    var submitButton2 = document.getElementById(formId + "submitButton");

    if (totalRam2 > 32) {
      ramWarning2.innerHTML = "Total RAM should not exceed 32GB.";
      submitButton2.disabled = true;
    } else {
      ramWarning2.innerHTML = "";
      submitButton2.disabled = false;
    }

    // 수정된 부분: 두 번째 컨테이너 데이터 서버로 전송
    if (!submitButton2.disabled) {
      sendDataToServer(formId, kaliCount2, rockyCount2, ubuntuCount2, centosCount2);
    }
  }
}

// 첫 번째 컨테이너 폼 데이터 처리
document.getElementById("containerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var kaliCount = parseInt(document.getElementById("containerFormkaliCount").value);
  var rockyCount = parseInt(document.getElementById("containerFormrockyCount").value);
  var ubuntuCount = parseInt(document.getElementById("containerFormubuntuCount").value);
  var centosCount = parseInt(document.getElementById("containerFormcentosCount").value);

  var totalRam = kaliCount * 8 + (rockyCount + ubuntuCount + centosCount) * 4;

  if (totalRam > 32) {
    document.getElementById("containerFormramWarning").innerHTML = "Total RAM should not exceed 32GB.";
    return;
  } else {
    document.getElementById("containerFormramWarning").innerHTML = "";
  }

  // 수정된 부분: 첫 번째 컨테이너 데이터 서버로 전송
  sendDataToServer("containerForm", kaliCount, rockyCount, ubuntuCount, centosCount);
});

// 두 번째 컨테이너 폼 데이터 처리
document.getElementById("containerForm2").addEventListener("submit", function(event) {
  event.preventDefault();

  var kaliCount2 = parseInt(document.getElementById("containerForm2kaliCount").value);
  var rockyCount2 = parseInt(document.getElementById("containerForm2rockyCount").value);
  var ubuntuCount2 = parseInt(document.getElementById("containerForm2ubuntuCount").value);
  var centosCount2 = parseInt(document.getElementById("containerForm2centosCount").value);

  var totalRam2 = kaliCount2 * 8 + (rockyCount2 + ubuntuCount2 + centosCount2) * 4;

  if (totalRam2 > 32) {
    document.getElementById("containerForm2ramWarning").innerHTML = "Total RAM should not exceed 32GB.";
    return;
  } else {
    document.getElementById("containerForm2ramWarning").innerHTML = "";
  }

  // 수정된 부분: 두 번째 컨테이너 데이터 서버로 전송
  sendDataToServer("containerForm2", kaliCount2, rockyCount2, ubuntuCount2, centosCount2);
});
