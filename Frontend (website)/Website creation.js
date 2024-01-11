class MainMenuNavigator {
    constructor(pageId) {
      this.pageId = pageId;
      this.backButtonId = `goToMainMenuFrom${this.pageId.charAt(0).toUpperCase() + this.pageId.slice(1)}`;
      document.getElementById(this.backButtonId).addEventListener('click', () => this.goToMainMenu());
    }
  
    goToMainMenu() {
      document.getElementById(this.pageId).style.display = 'none';
      document.getElementById('main-menu').style.display = 'block';
    }
  }
  
  const profileMenuNavigator = new MainMenuNavigator('profile');
  const nonogramSolvingMenuNavigator = new MainMenuNavigator('nonogram-solving');


class ProfileNavigator {
    constructor(pageId) {
      this.pageId = pageId;
      this.backButtonId = `goToProfileFrom${this.pageId.charAt(0).toUpperCase() + this.pageId.slice(1)}`;
      document.getElementById(this.backButtonId).addEventListener('click', () => this.goToProfile());
    }
  
    goToProfile() {
      document.getElementById(this.pageId).style.display = 'none';
      document.getElementById('profile').style.display = 'block';
    }
  }
   
  const mainMenuProfileNavigator = new ProfileNavigator('main-menu');
  const nonogramSolvingProfileNavigator = new ProfileNavigator('nonogram-solving');
  
  function goToNonogramSolving() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('nonogram-solving').style.display = 'block';
  }
  
  document.getElementById('goToNonogramSolving').addEventListener('click', goToNonogramSolving);
  