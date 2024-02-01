class MainMenuNavigator {
    constructor(pageId) {
      this.pageId = pageId;
      this.menuButtonId = `goToMainMenuFrom${this.pageId.charAt(0).toUpperCase() + this.pageId.slice(1)}`;
      document.getElementById(this.menuButtonId).addEventListener('click', () => this.goToMainMenu());
    }
  
    goToMainMenu() {
      document.getElementById(this.pageId).style.display = 'none';
      document.getElementById('main-menu').style.display = 'block';
    }
  }
  
  const profileMenuNavigator = new MainMenuNavigator('profile');
  const nonogramSolvingMenuNavigator = new MainMenuNavigator('nonogram-solving');
  const profileCreationMenuNavigator = new MainMenuNavigator('profile-creation');


class ProfileNavigator {
    constructor(pageId) {
      this.pageId = pageId;
      this.profileButtonId = `goToProfileFrom${this.pageId.charAt(0).toUpperCase() + this.pageId.slice(1)}`;
      document.getElementById(this.profileButtonId).addEventListener('click', () => this.goToProfile());
    }
  
    goToProfile() {
      document.getElementById(this.pageId).style.display = 'none';
      document.getElementById('profile').style.display = 'block';
    }
  }
   
  const mainMenuProfileNavigator = new ProfileNavigator('main-menu');
  const nonogramSolvingProfileNavigator = new ProfileNavigator('nonogram-solving');

class ProfileCreationNavigator {
    constructor(pageId) {
      this.pageId = pageId;
      this.profileButtonId = `goToProfileCreationFrom${this.pageId.charAt(0).toUpperCase() + this.pageId.slice(1)}`;
      document.getElementById(this.profileButtonId).addEventListener('click', () => this.goToProfileCreation());
    }
  
    goToProfileCreation() {
      document.getElementById(this.pageId).style.display = 'none';
      document.getElementById('profile-creation').style.display = 'block';
    }
  }
   
  const mainMenuProfileCreationNavigator = new ProfileCreationNavigator('main-menu');
  // const nonogramSolvingProfileCreationNavigator = new ProfileNavigator('nonogram-solving');
  
  

class JapaneseFactShower{
  constructor(pageId) {
    this.pageId = pageId;
    this.japaneseFactId = `japaneseCulture${this.pageId.charAt(0).toUpperCase() + this.pageId.slice(1)}`
    this.japaneseFactButtonId = `showJapaneseCulture${this.pageId.charAt(0).toUpperCase() + this.pageId.slice(1)}`;
    document.getElementById(this.japaneseFactButtonId).addEventListener('click', () => this.showJapaneseFact());
  }

  showJapaneseFact() {
    var dropdown = document.getElementById(this.japaneseFactId);
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }
}
    
    const mainMenuJapaneseFactShower = new JapaneseFactShower('main-menu');
    const nonogramSolvingJapaneseFactShower = new JapaneseFactShower('nonogram-solving');


  function goToNonogramSolving() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('nonogram-solving').style.display = 'block';
  }
  
  document.getElementById('goToNonogramSolving').addEventListener('click', goToNonogramSolving);
  

// should call this function in the profile navigator class to avoid code redundancy
  function goToProfileFromLogIn(pageId){
    document.getElementById(pageId).style.display = 'none';
    document.getElementById('profile').style.display = 'block';
  }
  