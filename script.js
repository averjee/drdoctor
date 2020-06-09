
let app = new Vue({
	el: '#app',
	data: {
		lastname: '',
		dob: '',
		postcode: '',
		authcode: '',
		results: [],
		showForm: true,
		showTable: false,
		showBox: false,
		showWelcome: false,
		error: ''
	},
	methods: {
		submit: function(lastname, dob, postcode) {
			// validation
			if (lastname === '' || dob === '' || postcode === '') {
				app.error = 'Fields cannot be blank';
				this.showTable = false;
			} else if (lastname.length > 50) {
				app.error = 'Last name should not be more than 50 characters';
				this.showTable = false;
			} else if (postcode.length < 5 || postcode.length > 7) {
				app.error = 'Invalid Postcode';
				this.showTable = false;	
			} else {
				app.error = '';
				this.showTable = true;
				this.showForm = false;
			}

			app.results = [
				{
					mobile: '07777777777',
					landline: '02077777777',
					email: 'test@gmail.com'
				}
			];
		},
		
		selectContact: function() {
			this.showTable = false;
			this.showBox = true;
		},
		authenticate: function(authcode) {
			if (authcode === '0000'){
				app.error = '';
				this.showWelcome = true;
				this.showBox = false;
			} else {
				app.error = 'Incorrect Authentication Code';
			}
		}
	},
	computed: {
		showForm: function() {
			return this.results.length === 0 && this.showForm === true;
		},
		showTable: function() {
			return this.results.length > 0 && this.showTable === true && this.showForm === false;
		},
		showBox: function() {
			return this.showBox === true && this.showTable === false;
		},
		showWelcome: function() {
			return this.showWelcome === true && this.showBox === false;
		}
	}
});