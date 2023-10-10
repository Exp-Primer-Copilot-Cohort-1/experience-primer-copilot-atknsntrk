function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var memberValue = member.value;
  var skillsValue = skills.value;
  var skillsArray = skillsValue.split(",");
  var skillsArrayLength = skillsArray.length;
  var skillsArrayIndex = skillsArray.indexOf(memberValue);
  if (skillsArrayIndex > -1) {
    skillsArray.splice(skillsArrayIndex, 1);
    skills.value = skillsArray;
  } else {
    skills.value = skillsValue + "," + memberValue;
  }
}