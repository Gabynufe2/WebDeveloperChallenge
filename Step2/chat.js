<script type="text/javascript">
  var url = window.location.href;
  var locale = url.split("/")[3];
  var onlineGreeting, offlineGreeting, department

   window.$zopim||(function(d,s){var z=$zopim=function(c){
   z._.push(c)},$=z.s=
   d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
   _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
   $.src='//v2.zopim.com/?';z.t=+new Date;$.
   type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');

  if(locale === "es") {
    onlineGreeting = "Habla con nosotras";
    offlineGreeting = 'Nuestros consejeros no están disponibles en este momento, por favor deje un mensaje y nos pondremos en contacto con usted pronto';
    department = "spanish";
  }
  else if(locale === "pt-pt") {
    onlineGreeting = "Fale com a gente";
    offlineGreeting = 'Nossos conselheiros não estão disponíveis no momento, por favor deixe uma mensagem e entraremos em contato com você em breve';
    department = "portuguese";
  }
  else if(locale === "fr") {
    onlineGreeting = "Parlez-nous";
    offlineGreeting = 'Nos conseillers ne sont pas disponibles pour le moment, veuillez laisser un message et nous vous contacterons bientôt';
    department = "french";
  }
  else if(locale === "hi") {
    onlineGreeting = "हमारे साथ बात";
    offlineGreeting = "हमारे सलाहकारों पल में उपलब्ध नहीं हैं, एक संदेश छोड़ कृपया और हम आप जल्द ही संपर्क करेंगे";
    department = "hindi";
  }
  else if(locale === "pl") {
    onlineGreeting = "Porozmawiaj z nami";
    offlineGreeting = 'Nasi doradcy nie są dostępne w tej chwili, proszę zostawić wiadomość, a my skontaktujemy się z Państwem wkrótce';
    department = "polish";
  }
    else {
    onlineGreeting = "Chat with us";
    offlineGreeting = "Our counselors are not available at the moment, please leave a message and we will contact you soon";
    department = "english";
  }
 $zopim(function() {
   $zopim.livechat.setGreetings({
   'online': onlineGreeting,
   'offline': offlineGreeting
   });
   $zopim.livechat.departments.filter(department);
 });
 </script>