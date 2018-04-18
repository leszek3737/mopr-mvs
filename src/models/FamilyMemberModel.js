(function () {
  'use strict';

  app.FamilyMemberModel = class FamilyMemberModel extends app.Abstract.Model {
    constructor() {
      super();
    }
   
    static fromJSON(options) {
        const familyMemberModel = new app.familyMemberModel();
      return familyMemberModel;
    }
  };

})();
