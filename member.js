function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'skills-member.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}