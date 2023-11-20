import React, { Component } from 'react';
import Toggle from './Toggle';

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
     <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
     }}>
       <h1 className='font-bold'>Settings</h1>
       <br></br>
       <form>
         <label>
           Theme:
           <Toggle 
           labelLeft={' Dark '}
            labelRight={' Light '}
            value={settings.theme}
            onChange={this.handleChange}
            name="theme"
            checked={settings.theme === 'light'}
           />
         </label>
         <br></br>
         <label>
           Notifications:
           <Toggle 
           labelLeft={' On '}
            labelRight={' Off '}
            value={settings.notifications}
            onChange={this.handleChange}
            name="notifications"
            checked={settings.notifications === 'Off'}
           />
         </label>
         <br></br>
         <label>
           Visibility:
           <Toggle 
           labelLeft={' Public '}
            labelRight={' Private '}
            value={settings.visibility}
            onChange={this.handleChange}
            name="visibility"
            checked={settings.visibility === 'private'}
           />
         </label>
       </form>
     </div>
   );
 }
}

export default Settings;
