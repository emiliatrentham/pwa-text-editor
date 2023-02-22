const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installBtn.style.visibility = 'visible';
  textHeader.textContent = 'Click the button to install!';
});

butInstall.addEventListener('click', async (event) => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});

window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event); 
});
