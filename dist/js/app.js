var app = angular.module('tabsDashboard', ['ui.bootstrap']);
// Declare the AppCtrl controller
app.controller('AppCtrl', ['$scope', function ($scope) {

    // Tab counter
	var counter = 1;
	// Array to store the tabs
	$scope.tabs = [];
	
	// Add tab to the end of the array
	var addTab = function () {
	$scope.tabs.push({ title: 'Tab ' + counter, content: 'Tab ' + counter });
	counter++;
	$scope.tabs[$scope.tabs.length - 1].active = true;
	};
	
	// Remove tab by index
	var removeTab = function (event, index) {
	event.preventDefault();
	event.stopPropagation();
	$scope.tabs.splice(index, 1);
	};
	
	// Initialize the scope functions
	$scope.addTab    = addTab;
	$scope.removeTab = removeTab;
	
	// For demonstration add 10 tabs
	for (var i = 0; i < 3; i++) {
	addTab();
	}

  }])
  .directive('tabHighlight', [function () {

  return {
  restrict: 'A',
  link: function (scope, element) {
    // Here is the major jQuery usage where we add the event
    // listeners mousemove and mouseout on the tabs to initalize
    // the moving highlight for the inactive tabs
    var x, y, initial_background = '#c3d5e6';

    element
      .removeAttr('style')
      .mousemove(function (e) {
        // Add highlight effect on inactive tabs
        if(!element.hasClass('active'))
        {
          x = e.pageX - this.offsetLeft;
          y = e.pageY - this.offsetTop;

          // Set the background when mouse moves over inactive tabs
          element
            .css({ background: '-moz-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
            .css({ background: '-webkit-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
            .css({ background: 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background });
        }
      })
      .mouseout(function () {
        // Return the inital background color of the tab
        element.removeAttr('style');
      });
  }
};
    

  }]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndGFic0Rhc2hib2FyZCcsIFsndWkuYm9vdHN0cmFwJ10pO1xyXG4vLyBEZWNsYXJlIHRoZSBBcHBDdHJsIGNvbnRyb2xsZXJcclxuYXBwLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgICAvLyBUYWIgY291bnRlclxyXG5cdHZhciBjb3VudGVyID0gMTtcclxuXHQvLyBBcnJheSB0byBzdG9yZSB0aGUgdGFic1xyXG5cdCRzY29wZS50YWJzID0gW107XHJcblx0XHJcblx0Ly8gQWRkIHRhYiB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxyXG5cdHZhciBhZGRUYWIgPSBmdW5jdGlvbiAoKSB7XHJcblx0JHNjb3BlLnRhYnMucHVzaCh7IHRpdGxlOiAnVGFiICcgKyBjb3VudGVyLCBjb250ZW50OiAnVGFiICcgKyBjb3VudGVyIH0pO1xyXG5cdGNvdW50ZXIrKztcclxuXHQkc2NvcGUudGFic1skc2NvcGUudGFicy5sZW5ndGggLSAxXS5hY3RpdmUgPSB0cnVlO1xyXG5cdH07XHJcblx0XHJcblx0Ly8gUmVtb3ZlIHRhYiBieSBpbmRleFxyXG5cdHZhciByZW1vdmVUYWIgPSBmdW5jdGlvbiAoZXZlbnQsIGluZGV4KSB7XHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHQkc2NvcGUudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdH07XHJcblx0XHJcblx0Ly8gSW5pdGlhbGl6ZSB0aGUgc2NvcGUgZnVuY3Rpb25zXHJcblx0JHNjb3BlLmFkZFRhYiAgICA9IGFkZFRhYjtcclxuXHQkc2NvcGUucmVtb3ZlVGFiID0gcmVtb3ZlVGFiO1xyXG5cdFxyXG5cdC8vIEZvciBkZW1vbnN0cmF0aW9uIGFkZCAxMCB0YWJzXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuXHRhZGRUYWIoKTtcclxuXHR9XHJcblxyXG4gIH1dKVxyXG4gIC5kaXJlY3RpdmUoJ3RhYkhpZ2hsaWdodCcsIFtmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgcmVzdHJpY3Q6ICdBJyxcclxuICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQpIHtcclxuICAgIC8vIEhlcmUgaXMgdGhlIG1ham9yIGpRdWVyeSB1c2FnZSB3aGVyZSB3ZSBhZGQgdGhlIGV2ZW50XHJcbiAgICAvLyBsaXN0ZW5lcnMgbW91c2Vtb3ZlIGFuZCBtb3VzZW91dCBvbiB0aGUgdGFicyB0byBpbml0YWxpemVcclxuICAgIC8vIHRoZSBtb3ZpbmcgaGlnaGxpZ2h0IGZvciB0aGUgaW5hY3RpdmUgdGFic1xyXG4gICAgdmFyIHgsIHksIGluaXRpYWxfYmFja2dyb3VuZCA9ICcjYzNkNWU2JztcclxuXHJcbiAgICBlbGVtZW50XHJcbiAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXHJcbiAgICAgIC5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvLyBBZGQgaGlnaGxpZ2h0IGVmZmVjdCBvbiBpbmFjdGl2ZSB0YWJzXHJcbiAgICAgICAgaWYoIWVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHggPSBlLnBhZ2VYIC0gdGhpcy5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgeSA9IGUucGFnZVkgLSB0aGlzLm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgICAvLyBTZXQgdGhlIGJhY2tncm91bmQgd2hlbiBtb3VzZSBtb3ZlcyBvdmVyIGluYWN0aXZlIHRhYnNcclxuICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgLmNzcyh7IGJhY2tncm91bmQ6ICctbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwcHgsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA0NXB4KSwgJyArIGluaXRpYWxfYmFja2dyb3VuZCB9KVxyXG4gICAgICAgICAgICAuY3NzKHsgYmFja2dyb3VuZDogJy13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjQpIDBweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjApIDQ1cHgpLCAnICsgaW5pdGlhbF9iYWNrZ3JvdW5kIH0pXHJcbiAgICAgICAgICAgIC5jc3MoeyBiYWNrZ3JvdW5kOiAncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAnICsgeCArICdweCAnICsgeSArICdweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjQpIDBweCwgcmdiYSgyNTUsMjU1LDI1NSwwLjApIDQ1cHgpLCAnICsgaW5pdGlhbF9iYWNrZ3JvdW5kIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLm1vdXNlb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBSZXR1cm4gdGhlIGluaXRhbCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuICAgIFxyXG5cclxuICB9XSk7Il19
