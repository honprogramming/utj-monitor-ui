define(
        [
            'modules/admin/indicators/model/SummaryIndicator'
        ],
        function (SummaryIndicator) {

            /**
             * Indicator Item.
             * 
             * @param {type} id
             * @param {type} name
             * @param {type} type
             */
            function FullIndicator(id, name, type) {
                SummaryIndicator.call(this, id, name);
                this.type = type;
                this.description;
                this.direction;
                this.periodicity;
                this.measureUnit;
                this.resetType;
                this.baseYear;
                this.status;
                this.strategicItem;
                this.achievements;
                this.resetDates;
            }
            
            FullIndicator.prototype = Object.create(SummaryIndicator.prototype);
            FullIndicator.prototype.constructor = FullIndicator;
            
            var prototype = FullIndicator.prototype;
            
            prototype.getType = function () {
                return this.type;
            };

            prototype.setType = function (type) {
                this.type = type;
            };
            
            prototype.getDescription = function() {
                return this.description;
            };
            
            prototype.setDescription = function(description) {
                this.description = description;
            };
            
            prototype.getDirection = function() {
                return this.getDirection;
            };
            
            prototype.setDirection = function(direction) {
                this.direction = direction;
            };
            
            prototype.getPeriodicity = function() {
                return this.periodicity;
            };
            
            prototype.setPeriodicity = function(periodicity) {
                this.periodicity = periodicity;
            };
            
            prototype.getMeasureUnit = function() {
                return this.measureUnit;
            };
            
            prototype.setMeasureUnit = function(measureUnit) {
                this.measureUnit = measureUnit;
            };
            
            prototype.getResetType = function() {
                return this.resetType;
            };
            
            prototype.setResetType = function(resetType) {
                this.resetType = resetType;
            };
            
            prototype.getBaseYear = function() {
                return this.baseYear;
            };
            
            prototype.setBaseYear = function(baseYear) {
                this.baseYear = baseYear;
            };
            
            prototype.getStatus = function() {
                return this.status;
            };
            
            prototype.setStatus = function(status) {
                this.status = status;
            };
            
            prototype.getStrategicItem = function() {
                return this.strategicItem;
            };
            
            prototype.setStrategicItem = function(strategicItem) {
                this.strategicItem = strategicItem;
            };
            
            prototype.getAchievements = function() {
                return this.achievements;
            };
            
            prototype.setAchievements = function(achievements) {
                this.achievements = achievements;
            };
            
            prototype.getResetDates = function() {
                return this.resetDates;
            };
            
            prototype.setResetDates = function(resetDates) {
                this.resetDates = resetDates;
            };
            
            return FullIndicator;
        }
);