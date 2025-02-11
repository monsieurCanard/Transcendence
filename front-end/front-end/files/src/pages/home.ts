export function renderHomePage() {
	return `<div class='flex flex-col items-center justify-center h-screen space-y-4 text-white'>
    <img src='/logo.svg' alt='Transcenduck Logo' />
    <div class='flex flex-row items-center p-3 justify-space-between'>
      <label for='language' translate="lang_choice" class="p-1">Choose a language:</label>
      <select name='language' id='language'>
        <option class="bg-black" value='en'>English</option>
        <option class="bg-black" value='es'>Spanish</option>
        <option class="bg-black" value='fr'>French</option>
      </select>
    </div>
    <div class='flex flex-row items-center p-3 justify-space-between'>
      <label class='text-lg p-4' for='theme' translate="save_choice">Save language</label>
      <input type='checkbox' id="save_lang" class='w-6 h-6 '/>
      </div>
      <button class="overflow-hidden rounded-full" onclick="window.location.href='/enter'">
      <img src='/duck_enter2.png' id="loadLogin" class="brightness-0 w-200 h-200 hover:brightness-100" /></button>
      `
}