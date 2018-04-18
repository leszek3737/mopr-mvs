(function () {
    'use strict';

    app.TransactionModel = class TransactionModel extends app.Abstract.Model {
        constructor() {
            super();
        }

        setRepayment(repayment) {
            this.set('repayment', repayment);
        }
        setFamily(family) {
            this.set('family', familyCollection);
        }
        setDPS(DPS) {
            this.set('DPS', DPS);
        }
        
        getRepayment() {
            this.get('repayment');
        }
        getFamily() {
            this.get('family');
        }
        getDPS() {
            this.get('DPS');
        }
        
        fromJSON(options) {
            const {
                repayment,
                family,
                DPS
            } = options;
            const familyCollection = app.FamilyCollectionModel.fromJSON(family);

            this.set('repayment', repayment);
            this.set('family', familyCollection);
            this.set('DPS', DPS);

        }
    };

})();
