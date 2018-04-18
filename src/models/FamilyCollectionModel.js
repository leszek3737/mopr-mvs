(function () {
    'use strict';

    app.FamilyCollectionModel = class FamilyCollectionModel extends app.Abstract.Model {
        constructor() {
            super();
        }

        static fromJSON(options) {
            const familyCollectionObj = new app.FamilyCollectionModel();
            const {
                familyCollection
            } = options;

            familyCollectionObj.set('members', []);

            familyCollection.forEach((familyMember) => {
                const familyMemberObj = app.FamilyCollectionModel.fromJSON(familyMember);
                familyCollectionObj.get('members').push(familyMemberObj);
            });

            return familyCollectionObj;
        }
    };

})();
