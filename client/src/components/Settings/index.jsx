import React, { Component } from 'react';

class Settings extends Component {
 constructor(props) {
   super(props);
   this.state = {
     settings: {
       theme: 'light',
       notifications: true,
       visibility: 'public'
     }
   };
 }

 handleChange = (event) => {
   const { name, value } = event.target;
   this.setState(prevState => ({
     settings: {
       ...prevState.settings,
       [name]: value
     }
   }));
 }

 render() {
   const { settings } = this.state;
   return (
     <div>
       <h1>Settings</h1>
       <form>
         <label>
           Theme:
           <select name="theme" value={settings.theme} onChange={this.handleChange}>
             <option value="light">Light</option>
             <option value="dark">Dark</option>
           </select>
         </label>
         <label>
           Notifications:
           <input type="checkbox" name="notifications" checked={settings.notifications} onChange={this.handleChange} />
         </label>
         <label>
           Visibility:
           <select name="visibility" value={settings.visibility} onChange={this.handleChange}>
             <option value="private">Private</option>
             <option value="public">Public</option>
           </select>
         </label>
       </form>
     </div>
   );
 }
}

export default Settings;
