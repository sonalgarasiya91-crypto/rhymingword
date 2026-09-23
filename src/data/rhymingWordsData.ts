import { RhymeWord, PoemStanza, OddOneOutItem, QuizQuestion } from '../types/rhyme';

export const RHYMING_WORDS: RhymeWord[] = [
  // ================= STANDARD 6 =================
  {
    id: 's6-1',
    word: 'Bright',
    pronunciationGu: 'બ્રાઇટ',
    meaningGu: 'તેજસ્વી / ચમકતું',
    meaningEn: 'Giving out or reflecting much light; shining',
    soundFamily: '-ight',
    grade: '6',
    rhymesWith: ['Light', 'Night', 'Right', 'Sight'],
    exampleSentenceEn: 'The stars shine bright in the night sky.',
    exampleSentenceGu: 'રાત્રિના આકાશમાં તારા તેજસ્વી ચમકે છે.',
    sourcePoem: 'Std 6 - A Boy Who Made a Difference',
    syllables: 1
  },
  {
    id: 's6-2',
    word: 'Night',
    pronunciationGu: 'નાઇટ',
    meaningGu: 'રાત / રાત્રિ',
    meaningEn: 'The period from sunset to sunrise',
    soundFamily: '-ight',
    grade: '6',
    rhymesWith: ['Bright', 'Light', 'Fight', 'Sight'],
    exampleSentenceEn: 'The moon gives silver light at night.',
    exampleSentenceGu: 'રાત્રે ચંદ્ર રૂપેરી પ્રકાશ આપે છે.',
    sourcePoem: 'Std 6 - Who Was First?',
    syllables: 1
  },
  {
    id: 's6-3',
    word: 'Bell',
    pronunciationGu: 'બેલ',
    meaningGu: 'ઘંટ / ઘંટડી',
    meaningEn: 'A hollow metal object that sounds a clear musical note',
    soundFamily: '-ell',
    grade: '6',
    rhymesWith: ['Tell', 'Well', 'Sell', 'Fell'],
    exampleSentenceEn: 'Ring the bicycle bell to tell people you are coming.',
    exampleSentenceGu: 'તમે આવી રહ્યા છો તે જણાવવા માટે સાયકલની ઘંટડી વગાડો.',
    sourcePoem: 'Std 6 - My Bicycle',
    syllables: 1
  },
  {
    id: 's6-4',
    word: 'Tell',
    pronunciationGu: 'ટેલ',
    meaningGu: 'કહેવું / જણાવવું',
    meaningEn: 'Communicate information to someone in spoken or written words',
    soundFamily: '-ell',
    grade: '6',
    rhymesWith: ['Bell', 'Well', 'Sell', 'Fell'],
    exampleSentenceEn: 'Please tell me when the school bell rings.',
    exampleSentenceGu: 'કૃપા કરીને જ્યારે શાળાનો ઘંટ વાગે ત્યારે મને કહો.',
    sourcePoem: 'Std 6 - My Bicycle',
    syllables: 1
  },
  {
    id: 's6-5',
    word: 'Tall',
    pronunciationGu: 'ટોલ',
    meaningGu: 'ઊંચું',
    meaningEn: 'Of great or more than average height',
    soundFamily: '-all',
    grade: '6',
    rhymesWith: ['Ball', 'Call', 'Fall', 'Wall', 'Small'],
    exampleSentenceEn: 'The giraffe in the zoo is very tall.',
    exampleSentenceGu: 'પ્રાણીસંગ્રહાલયમાં જીરાફ ઘણું ઊંચું છે.',
    sourcePoem: 'Std 6 - In the Zoo',
    syllables: 1
  },
  {
    id: 's6-6',
    word: 'Small',
    pronunciationGu: 'સ્મોલ',
    meaningGu: 'નાનું',
    meaningEn: 'Of a size that is less than normal or usual',
    soundFamily: '-all',
    grade: '6',
    rhymesWith: ['Tall', 'Ball', 'Call', 'Fall', 'Wall'],
    exampleSentenceEn: 'A baby bird was tiny and small.',
    exampleSentenceGu: 'પક્ષીનું બચ્ચું સાવ નાનું હતું.',
    sourcePoem: 'Std 6 - In the Zoo',
    syllables: 1
  },
  {
    id: 's6-7',
    word: 'Fast',
    pronunciationGu: 'ફાસ્ટ',
    meaningGu: 'ઝડપી / વેગીલું',
    meaningEn: 'Moving or capable of moving at high speed',
    soundFamily: '-ast',
    grade: '6',
    rhymesWith: ['Past', 'Last', 'Cast'],
    exampleSentenceEn: 'I ride my bicycle very fast.',
    exampleSentenceGu: 'હું મારી સાયકલ ખૂબ ઝડપથી ચલાવું છું.',
    sourcePoem: 'Std 6 - My Bicycle',
    syllables: 1
  },
  {
    id: 's6-8',
    word: 'Past',
    pronunciationGu: 'પાસ્ટ',
    meaningGu: 'ભૂતકાળ / આગળથી પસાર થવું',
    meaningEn: 'Gone by in time and no longer existing; beyond',
    soundFamily: '-ast',
    grade: '6',
    rhymesWith: ['Fast', 'Last', 'Cast'],
    exampleSentenceEn: 'We rode our bikes past the school gate.',
    exampleSentenceGu: 'અમે શાળાના દરવાજા પાસેથી સાયકલ ચલાવીને નીકળ્યા.',
    sourcePoem: 'Std 6 - My Bicycle',
    syllables: 1
  },
  {
    id: 's6-9',
    word: 'Wing',
    pronunciationGu: 'વિંગ',
    meaningGu: 'પાંખ',
    meaningEn: 'One of the parts of the body of a bird or insect used for flying',
    soundFamily: '-ing',
    grade: '6',
    rhymesWith: ['Sing', 'Ring', 'King', 'Bring'],
    exampleSentenceEn: 'The bird flaps its wing and begins to sing.',
    exampleSentenceGu: 'પક્ષી તેની પાંખ ફફડાવે છે અને ગાવાનું શરૂ કરે છે.',
    sourcePoem: 'Std 6 - In the Zoo',
    syllables: 1
  },
  {
    id: 's6-10',
    word: 'Sing',
    pronunciationGu: 'સિંગ',
    meaningGu: 'ગાવું / ગીત ગાવું',
    meaningEn: 'Make musical sounds with the voice',
    soundFamily: '-ing',
    grade: '6',
    rhymesWith: ['Wing', 'Ring', 'King', 'Spring'],
    exampleSentenceEn: 'Birds sit on the branch and sweet songs they sing.',
    exampleSentenceGu: 'પક્ષીઓ ડાળી પર બેસે છે અને મધુર ગીતો ગાય છે.',
    sourcePoem: 'Std 6 - In the Zoo',
    syllables: 1
  },
  {
    id: 's6-11',
    word: 'Day',
    pronunciationGu: 'ડે',
    meaningGu: 'દિવસ / દહાડો',
    meaningEn: 'A period of twenty-four hours or daytime',
    soundFamily: '-ay',
    grade: '6',
    rhymesWith: ['Play', 'Say', 'Way', 'Stay', 'May'],
    exampleSentenceEn: 'Children love to play during a sunny day.',
    exampleSentenceGu: 'બાળકો તડકાવાળા દિવસે રમવાનું પસંદ કરે છે.',
    sourcePoem: 'Std 6 - Unit 2 Activity',
    syllables: 1
  },
  {
    id: 's6-12',
    word: 'Play',
    pronunciationGu: 'પ્લે',
    meaningGu: 'રમવું / રમત',
    meaningEn: 'Engage in activity for enjoyment and recreation',
    soundFamily: '-ay',
    grade: '6',
    rhymesWith: ['Day', 'Say', 'Way', 'Stay', 'Clay'],
    exampleSentenceEn: 'Come outside and let us play together today.',
    exampleSentenceGu: 'બહાર આવો અને ચાલો આજે આપણે સાથે રમીએ.',
    sourcePoem: 'Std 6 - The Elephant',
    syllables: 1
  },
  {
    id: 's6-13',
    word: 'Fly',
    pronunciationGu: 'ફ્લાય',
    meaningGu: 'ઊડવું',
    meaningEn: 'Move through the air using wings',
    soundFamily: '-y',
    grade: '6',
    rhymesWith: ['Cry', 'Sky', 'High', 'Dry', 'Try'],
    exampleSentenceEn: 'Kites fly high up in the blue sky.',
    exampleSentenceGu: 'વાદળી આકાશમાં પતંગો ઊંચે ઊડે છે.',
    sourcePoem: 'Std 6 - In the Zoo',
    syllables: 1
  },
  {
    id: 's6-14',
    word: 'Cry',
    pronunciationGu: 'ક્રાય',
    meaningGu: 'રડવું / પોકાર કરવો',
    meaningEn: 'Shed tears as an expression of distress, pain, or sorrow',
    soundFamily: '-y',
    grade: '6',
    rhymesWith: ['Fly', 'Sky', 'Dry', 'Try', 'Why'],
    exampleSentenceEn: 'Do not cry when you hear the eagle fly.',
    exampleSentenceGu: 'જ્યારે ગરુડને ઊડતું જુઓ ત્યારે રડશો નહીં.',
    sourcePoem: 'Std 6 - In the Zoo',
    syllables: 1
  },
  {
    id: 's6-15',
    word: 'Cold',
    pronunciationGu: 'કોલ્ડ',
    meaningGu: 'ઠંડું / ટાઢું',
    meaningEn: 'Of or at a low or relatively low temperature',
    soundFamily: '-old',
    grade: '6',
    rhymesWith: ['Bold', 'Gold', 'Hold', 'Told'],
    exampleSentenceEn: 'The winter wind is frosty and cold.',
    exampleSentenceGu: 'શિયાળાનો પવન ઠંડો અને બર્ફીલો છે.',
    sourcePoem: 'Std 6 - In the Zoo',
    syllables: 1
  },
  {
    id: 's6-16',
    word: 'Bold',
    pronunciationGu: 'બોલ્ડ',
    meaningGu: 'બહાદુર / હિંમતવાન',
    meaningEn: 'Showing a willingness to take risks; confident and courageous',
    soundFamily: '-old',
    grade: '6',
    rhymesWith: ['Cold', 'Gold', 'Hold', 'Told'],
    exampleSentenceEn: 'The brave tiger is fierce and bold.',
    exampleSentenceGu: 'બહાદુર વાઘ હિંમતવાન અને નિર્ભય છે.',
    sourcePoem: 'Std 6 - In the Zoo',
    syllables: 1
  },

  // ================= STANDARD 7 =================
  {
    id: 's7-1',
    word: 'Dancing',
    pronunciationGu: 'ડાન્સિંગ',
    meaningGu: 'નૃત્ય કરવું / નાચવું',
    meaningEn: 'Moving rhythmically to music, typically following steps',
    soundFamily: '-ancing',
    grade: '7',
    rhymesWith: ['Glancing', 'Prancing'],
    exampleSentenceEn: 'The river goes dancing and glancing over yellow pebbles.',
    exampleSentenceGu: 'નદી પીળા કાંકરા ઉપર નાચતી અને ચમકતી વહે છે.',
    sourcePoem: 'Std 7 - The River',
    syllables: 2
  },
  {
    id: 's7-2',
    word: 'Glancing',
    pronunciationGu: 'ગ્લાન્સિંગ',
    meaningGu: 'ઝલક જોવી / ચમકવું',
    meaningEn: 'Taking a brief or hurried look; reflecting light',
    soundFamily: '-ancing',
    grade: '7',
    rhymesWith: ['Dancing', 'Prancing'],
    exampleSentenceEn: 'Sunlight was glancing upon the dancing waves.',
    exampleSentenceGu: 'સૂર્યપ્રકાશ નાચતાં મોજાંઓ પર ચમકી રહ્યો હતો.',
    sourcePoem: 'Std 7 - The River',
    syllables: 2
  },
  {
    id: 's7-3',
    word: 'Deep',
    pronunciationGu: 'ડીપ',
    meaningGu: 'ઊંડું / ગહન',
    meaningEn: 'Extending far down from the top or surface',
    soundFamily: '-eep',
    grade: '7',
    rhymesWith: ['Sleep', 'Keep', 'Weep', 'Creep', 'Sheep'],
    exampleSentenceEn: 'The little seed lay asleep in the soil deep.',
    exampleSentenceGu: 'નાનકડો બીજ ઊંડી માટીમાં સૂતો હતો.',
    sourcePoem: 'Std 7 - The Little Plant',
    syllables: 1
  },
  {
    id: 's7-4',
    word: 'Sleep',
    pronunciationGu: 'સ્લીપ',
    meaningGu: 'ઊંઘવું / ઊંઘ',
    meaningEn: 'A natural state of rest for the body and mind',
    soundFamily: '-eep',
    grade: '7',
    rhymesWith: ['Deep', 'Keep', 'Weep', 'Creep', 'Sheep'],
    exampleSentenceEn: 'Tired children close their eyes and go to sleep.',
    exampleSentenceGu: 'થાકેલા બાળકો આંખો બંધ કરીને સૂઈ જાય છે.',
    sourcePoem: 'Std 7 - The Little Plant',
    syllables: 1
  },
  {
    id: 's7-5',
    word: 'Leap',
    pronunciationGu: 'લીપ',
    meaningGu: 'કૂદકો મારવો / કૂદવું',
    meaningEn: 'Jump or spring a long way, to a great height',
    soundFamily: '-eap',
    grade: '7',
    rhymesWith: ['Heap'],
    exampleSentenceEn: 'Frogs leap over the grass in the field.',
    exampleSentenceGu: 'દેડકાં ખેતરમાં ઘાસ પર કૂદકો મારે છે.',
    sourcePoem: 'Std 7 - The River',
    syllables: 1
  },
  {
    id: 's7-6',
    word: 'Wide',
    pronunciationGu: 'વાઇડ',
    meaningGu: 'પહોળું / વિશાળ',
    meaningEn: 'Of great extent from side to side; broad',
    soundFamily: '-ide',
    grade: '7',
    rhymesWith: ['Tide', 'Ride', 'Side', 'Hide', 'Guide'],
    exampleSentenceEn: 'The river grows wide as it meets the ocean tide.',
    exampleSentenceGu: 'સમુદ્રની ભરતીને મળતાં નદી વિશાળ બને છે.',
    sourcePoem: 'Std 7 - The River',
    syllables: 1
  },
  {
    id: 's7-7',
    word: 'Tide',
    pronunciationGu: 'ટાઇડ',
    meaningGu: 'ભરતી / ઓટ',
    meaningEn: 'The alternate rising and falling of the sea',
    soundFamily: '-ide',
    grade: '7',
    rhymesWith: ['Wide', 'Ride', 'Side', 'Hide', 'Guide'],
    exampleSentenceEn: 'The ship sailed across the rising sea tide.',
    exampleSentenceGu: 'જહાજ સમુદ્રની વધતી ભરતી પર આગળ વધ્યું.',
    sourcePoem: 'Std 7 - The River',
    syllables: 1
  },
  {
    id: 's7-8',
    word: 'Flew',
    pronunciationGu: 'ફ્લૂ',
    meaningGu: 'ઊડ્યું (fly નું ભૂતકાળ)',
    meaningEn: 'Past tense of fly; moved through the air',
    soundFamily: '-ew',
    grade: '7',
    rhymesWith: ['Blew', 'New', 'Knew', 'Grew', 'True'],
    exampleSentenceEn: 'A sudden gust blew and away the kite flew.',
    exampleSentenceGu: 'અચાનક પવન ફૂંકાયો અને પતંગ ઊડી ગયો.',
    sourcePoem: 'Std 7 - Smile in the Mirror',
    syllables: 1
  },
  {
    id: 's7-9',
    word: 'Blew',
    pronunciationGu: 'બ્લૂ',
    meaningGu: 'ફૂંકાયું (blow નું ભૂતકાળ)',
    meaningEn: 'Past tense of blow; expelled air or wind',
    soundFamily: '-ew',
    grade: '7',
    rhymesWith: ['Flew', 'New', 'Knew', 'Grew', 'Few'],
    exampleSentenceEn: 'The chilly wind blew across the mountain view.',
    exampleSentenceGu: 'પહાડના દ્રશ્ય પર ઠંડો પવન ફૂંકાયો.',
    sourcePoem: 'Std 7 - Smile in the Mirror',
    syllables: 1
  },
  {
    id: 's7-10',
    word: 'Bought',
    pronunciationGu: 'બોટ',
    meaningGu: 'ખરીદ્યું (buy નું ભૂતકાળ)',
    meaningEn: 'Past tense of buy; obtained in exchange for payment',
    soundFamily: '-ought',
    grade: '7',
    rhymesWith: ['Caught', 'Taught', 'Thought', 'Brought'],
    exampleSentenceEn: 'She bought a toy and caught a ball.',
    exampleSentenceGu: 'તેણે રમકડું ખરીદ્યું અને દડો પકડ્યો.',
    sourcePoem: 'Std 7 - Smile in the Mirror',
    syllables: 1
  },
  {
    id: 's7-11',
    word: 'Caught',
    pronunciationGu: 'કોટ',
    meaningGu: 'પકડ્યું (catch નું ભૂતકાળ)',
    meaningEn: 'Past tense of catch; intercepted and held',
    soundFamily: '-ought',
    grade: '7',
    rhymesWith: ['Bought', 'Taught', 'Thought', 'Brought'],
    exampleSentenceEn: 'The fielder caught the ball that was hit high.',
    exampleSentenceGu: 'ફીલ્ડરે ઊંચે ગયેલો દડો પકડી લીધો.',
    sourcePoem: 'Std 7 - Smile in the Mirror',
    syllables: 1
  },
  {
    id: 's7-12',
    word: 'Truth',
    pronunciationGu: 'ટ્રુથ',
    meaningGu: 'સત્ય / સાચું',
    meaningEn: 'The quality or state of being true',
    soundFamily: '-uth',
    grade: '7',
    rhymesWith: ['Youth'],
    exampleSentenceEn: 'In our lively youth, we must always follow the truth.',
    exampleSentenceGu: 'આપણી યુવાનીમાં આપણે હંમેશાં સત્યનું પાલન કરવું જોઈએ.',
    sourcePoem: 'Std 7 - The River',
    syllables: 1
  },
  {
    id: 's7-13',
    word: 'Youth',
    pronunciationGu: 'યુથ',
    meaningGu: 'યુવાની / તારુણ્ય',
    meaningEn: 'The period between childhood and adult age',
    soundFamily: '-uth',
    grade: '7',
    rhymesWith: ['Truth'],
    exampleSentenceEn: 'The river moves like a child in youthful truth.',
    exampleSentenceGu: 'નદી યુવાન સત્યની જેમ ઉત્સાહથી આગળ વધે છે.',
    sourcePoem: 'Std 7 - The River',
    syllables: 1
  },
  {
    id: 's7-14',
    word: 'Sound',
    pronunciationGu: 'સાઉન્ડ',
    meaningGu: 'અવાજ / ધ્વનિ',
    meaningEn: 'Vibrations that travel through the air and can be heard',
    soundFamily: '-ound',
    grade: '7',
    rhymesWith: ['Round', 'Found', 'Ground', 'Bound'],
    exampleSentenceEn: 'The bell made a loud sound across the playground.',
    exampleSentenceGu: 'મેદાનમાં ઘંટનો મોટો અવાજ સંભળાયો.',
    sourcePoem: 'Std 7 - Unit 3 Activity',
    syllables: 1
  },
  {
    id: 's7-15',
    word: 'Round',
    pronunciationGu: 'રાઉન્ડ',
    meaningGu: 'ગોળ / ગોળાકાર',
    meaningEn: 'Shaped like a circle or cylinder',
    soundFamily: '-ound',
    grade: '7',
    rhymesWith: ['Sound', 'Found', 'Ground', 'Bound'],
    exampleSentenceEn: 'The Earth is round and spins around.',
    exampleSentenceGu: 'પૃથ્વી ગોળ છે અને પોતાની ધરી પર ફરે છે.',
    sourcePoem: 'Std 7 - Unit 3 Activity',
    syllables: 1
  },

  // ================= STANDARD 8 =================
  {
    id: 's8-1',
    word: 'Star',
    pronunciationGu: 'સ્ટાર',
    meaningGu: 'તારો / નક્ષત્ર',
    meaningEn: 'A luminous point in the night sky',
    soundFamily: '-ar',
    grade: '8',
    rhymesWith: ['Far', 'Car', 'Jar', 'Bar'],
    exampleSentenceEn: 'Twinkle, twinkle little star, how you shine from so far.',
    exampleSentenceGu: 'નાનકડા તારા, તું આટલે દૂરથી કેવો ચમકે છે.',
    sourcePoem: 'Std 8 - Q for Question',
    syllables: 1
  },
  {
    id: 's8-2',
    word: 'Far',
    pronunciationGu: 'ફાર',
    meaningGu: 'દૂર / છેટે',
    meaningEn: 'At, to, or by a great distance',
    soundFamily: '-ar',
    grade: '8',
    rhymesWith: ['Star', 'Car', 'Jar', 'Bar'],
    exampleSentenceEn: 'The distant mountains look purple and far.',
    exampleSentenceGu: 'દૂરના પહાડો જાંબલી અને છેટે દેખાય છે.',
    sourcePoem: 'Std 8 - Q for Question',
    syllables: 1
  },
  {
    id: 's8-3',
    word: 'Sea',
    pronunciationGu: 'સી',
    meaningGu: 'દરિયો / સમુદ્ર',
    meaningEn: 'The expanse of salt water that covers most of the earth',
    soundFamily: '-ee',
    grade: '8',
    rhymesWith: ['Tree', 'See', 'Free', 'Bee', 'Three'],
    exampleSentenceEn: 'Sailors travel far across the blue sea.',
    exampleSentenceGu: 'ખલાસીઓ નીલા સમુદ્ર પર દૂર દૂર મુસાફરી કરે છે.',
    sourcePoem: 'Std 8 - Q for Question',
    syllables: 1
  },
  {
    id: 's8-4',
    word: 'Tree',
    pronunciationGu: 'ટ્રી',
    meaningGu: 'ઝાડ / વૃક્ષ',
    meaningEn: 'A woody perennial plant, typically having a single stem or trunk',
    soundFamily: '-ee',
    grade: '8',
    rhymesWith: ['Sea', 'See', 'Free', 'Bee', 'Three'],
    exampleSentenceEn: 'Birds build nests in the tall banyan tree.',
    exampleSentenceGu: 'પક્ષીઓ ઊંચા વડના વૃક્ષમાં માળા બાંધે છે.',
    sourcePoem: 'Std 8 - Q for Question',
    syllables: 1
  },
  {
    id: 's8-5',
    word: 'Beak',
    pronunciationGu: 'બીક',
    meaningGu: 'ચાંચ (પક્ષીની)',
    meaningEn: 'A bird\'s horny projecting jaws; bill',
    soundFamily: '-eak',
    grade: '8',
    rhymesWith: ['Speak', 'Peak', 'Weak', 'Leak'],
    exampleSentenceEn: 'The colorful parrot opened its curved beak to speak.',
    exampleSentenceGu: 'રંગબેરંગી પોપટે બોલવા માટે પોતાની વળેલી ચાંચ ખોલી.',
    sourcePoem: 'Std 8 - Peter the Parrot',
    syllables: 1
  },
  {
    id: 's8-6',
    word: 'Speak',
    pronunciationGu: 'સ્પીક',
    meaningGu: 'બોલવું / વાત કરવી',
    meaningEn: 'Say something in order to convey information or an opinion',
    soundFamily: '-eak',
    grade: '8',
    rhymesWith: ['Beak', 'Peak', 'Weak', 'Leak'],
    exampleSentenceEn: 'Always speak with kindness and gentle words.',
    exampleSentenceGu: 'હંમેશાં દયા અને નમ્ર શબ્દો સાથે બોલો.',
    sourcePoem: 'Std 8 - Peter the Parrot',
    syllables: 1
  },
  {
    id: 's8-7',
    word: 'Crown',
    pronunciationGu: 'ક્રાઉન',
    meaningGu: 'તાજ / મુગટ',
    meaningEn: 'An ornamental headpiece worn by a monarch',
    soundFamily: '-own',
    grade: '8',
    rhymesWith: ['Town', 'Brown', 'Down', 'Gown'],
    exampleSentenceEn: 'The wise king wore a golden crown.',
    exampleSentenceGu: 'શાણા રાજાએ સોનાનો મુગટ પહેર્યો હતો.',
    sourcePoem: 'Std 8 - Ah! King!',
    syllables: 1
  },
  {
    id: 's8-8',
    word: 'Town',
    pronunciationGu: 'ટાઉન',
    meaningGu: 'શહેર / નગર',
    meaningEn: 'A built-up area with a name, larger than a village',
    soundFamily: '-own',
    grade: '8',
    rhymesWith: ['Crown', 'Brown', 'Down', 'Gown'],
    exampleSentenceEn: 'People cheered as the king entered the town.',
    exampleSentenceGu: 'જ્યારે રાજા નગરમાં પ્રવેશ્યા ત્યારે લોકોએ જયજયકાર કર્યો.',
    sourcePoem: 'Std 8 - Ah! King!',
    syllables: 1
  },
  {
    id: 's8-9',
    word: 'Clear',
    pronunciationGu: 'ક્લિયર',
    meaningGu: 'સ્પષ્ટ / ચોખ્ખું',
    meaningEn: 'Easy to perceive, understand, or interpret; transparent',
    soundFamily: '-ear',
    grade: '8',
    rhymesWith: ['Hear', 'Near', 'Dear', 'Fear', 'Year'],
    exampleSentenceEn: 'The water in the stream was crystal clear.',
    exampleSentenceGu: 'ઝરણાંનું પાણી એકદમ સ્વચ્છ અને ચોખ્ખું હતું.',
    sourcePoem: 'Std 8 - Nature\'s Symphony',
    syllables: 1
  },
  {
    id: 's8-10',
    word: 'Hear',
    pronunciationGu: 'હિયર',
    meaningGu: 'સાંભળવું',
    meaningEn: 'Perceive with the ear the sound made by someone or something',
    soundFamily: '-ear',
    grade: '8',
    rhymesWith: ['Clear', 'Near', 'Dear', 'Fear', 'Year'],
    exampleSentenceEn: 'Listen closely and you will hear music near.',
    exampleSentenceGu: 'ધ્યાનથી સાંભળો અને તમને નજીકથી સંગીત સંભળાશે.',
    sourcePoem: 'Std 8 - Nature\'s Symphony',
    syllables: 1
  },
  {
    id: 's8-11',
    word: 'Breeze',
    pronunciationGu: 'બ્રીઝ',
    meaningGu: 'મંદ પવન / લહેરખી',
    meaningEn: 'A gentle, light wind',
    soundFamily: '-eeze',
    grade: '8',
    rhymesWith: ['Trees', 'Freeze', 'Squeeze'],
    exampleSentenceEn: 'A cool breeze rustled through the tall trees.',
    exampleSentenceGu: 'ઊંચાં વૃક્ષોમાંથી ઠંડી પવનની લહેરખી પસાર થઈ.',
    sourcePoem: 'Std 8 - Nature\'s Symphony',
    syllables: 1
  },
  {
    id: 's8-12',
    word: 'Trees',
    pronunciationGu: 'ટ્રીઝ',
    meaningGu: 'વૃક્ષો / ઝાડવાં',
    meaningEn: 'Plural of tree; plants with wood stems',
    soundFamily: '-eeze',
    grade: '8',
    rhymesWith: ['Breeze', 'Freeze', 'Seas', 'Bees'],
    exampleSentenceEn: 'Birds rest peacefully in the shelter of green trees.',
    exampleSentenceGu: 'લીલાં વૃક્ષોના છાંયડામાં પક્ષીઓ શાંતિથી આરામ કરે છે.',
    sourcePoem: 'Std 8 - Nature\'s Symphony',
    syllables: 1
  },
  {
    id: 's8-13',
    word: 'Drive',
    pronunciationGu: 'ડ્રાઇવ',
    meaningGu: 'ચલાવવું / હંકારવું',
    meaningEn: 'Operate and control the direction and speed of a motor vehicle',
    soundFamily: '-ive',
    grade: '8',
    rhymesWith: ['Thrive', 'Alive', 'Dive', 'Five'],
    exampleSentenceEn: 'Engines drive the train so that industries thrive.',
    exampleSentenceGu: 'એન્જિનો ટ્રેન ચલાવે છે જેથી ઉદ્યોગોનો વિકાસ થાય.',
    sourcePoem: 'Std 8 - The Secret of the Machines',
    syllables: 1
  },
  {
    id: 's8-14',
    word: 'Thrive',
    pronunciationGu: 'થ્રાઇવ',
    meaningGu: 'સમૃદ્ધ થવું / વિકાસ પામવો',
    meaningEn: 'Prosper; flourish or grow vigorously',
    soundFamily: '-ive',
    grade: '8',
    rhymesWith: ['Drive', 'Alive', 'Dive', 'Five'],
    exampleSentenceEn: 'With hard work, students succeed and thrive.',
    exampleSentenceGu: 'સખત મહેનતથી વિદ્યાર્થીઓ સફળ થાય છે અને પ્રગતિ કરે છે.',
    sourcePoem: 'Std 8 - The Secret of the Machines',
    syllables: 1
  },
  {
    id: 's8-15',
    word: 'Stream',
    pronunciationGu: 'સ્ટ્રીમ',
    meaningGu: 'ઝરણું / નાની નદી',
    meaningEn: 'A small, narrow river of water',
    soundFamily: '-eam',
    grade: '8',
    rhymesWith: ['Dream', 'Beam', 'Team', 'Cream'],
    exampleSentenceEn: 'Floating paper boats down the stream is like a dream.',
    exampleSentenceGu: 'ઝરણામાં કાગળની હોડી તરતી મૂકવી એ સપના જેવું લાગે છે.',
    sourcePoem: 'Std 8 - General Syllabus',
    syllables: 1
  },
  {
    id: 's8-16',
    word: 'Dream',
    pronunciationGu: 'ડ્રીમ',
    meaningGu: 'સ્વપ્ન / સપનું',
    meaningEn: 'A series of thoughts, images, and sensations occurring in a person\'s mind during sleep',
    soundFamily: '-eam',
    grade: '8',
    rhymesWith: ['Stream', 'Beam', 'Team', 'Scream'],
    exampleSentenceEn: 'Every child has a bright future dream.',
    exampleSentenceGu: 'દરેક બાળકનું ઉજ્જવળ ભવિષ્યનું એક સુંદર સ્વપ્ન હોય છે.',
    sourcePoem: 'Std 8 - General Syllabus',
    syllables: 1
  }
];

// Stanzas from Gujarat State Board (GSEB) / NCERT Std 6, 7, 8 English textbooks
export const POEM_STANZAS: PoemStanza[] = [
  {
    id: 'stanza-6-1',
    grade: '6',
    poemNameEn: 'In the Zoo',
    poemNameGu: 'પ્રાણીસંગ્રહાલયમાં',
    sourceUnit: 'Std 6 English - Sem 1, Unit 2',
    lines: [
      'The big brown bear has thick brown hair,',
      'He sits and watches without a care.',
      'The giraffe is very proud and tall,',
      'Next to the bunny so cute and small.'
    ],
    rhymingPairs: [
      ['bear', 'care'],
      ['tall', 'small']
    ],
    notesGu: 'અહીં "bear" અને "care" તેમજ "tall" અને "small" પ્રાસયુક્ત શબ્દોની જોડીઓ છે.'
  },
  {
    id: 'stanza-6-2',
    grade: '6',
    poemNameEn: 'My Bicycle',
    poemNameGu: 'મારી સાયકલ',
    sourceUnit: 'Std 6 English - Sem 2, Unit 3',
    lines: [
      'I ride my bicycle down the street,',
      'Waving to everyone that I meet.',
      'I ring my shiny silver bell,',
      'A happy story for you to tell!'
    ],
    rhymingPairs: [
      ['street', 'meet'],
      ['bell', 'tell']
    ],
    notesGu: '"street" સાથે "meet" અને "bell" સાથે "tell" સરખો અંતિમ ઉચ્ચાર ધરાવે છે.'
  },
  {
    id: 'stanza-7-1',
    grade: '7',
    poemNameEn: 'The River',
    poemNameGu: 'નદી (ધ રિવર)',
    sourceUnit: 'Std 7 English - Sem 1, Unit 1',
    lines: [
      'River, river, little river!',
      'Bright you sparkle on your way;',
      'O\'er the yellow pebbles dancing,',
      'Through the flowers and foliage glancing,',
      'Like a child at play.'
    ],
    rhymingPairs: [
      ['way', 'play'],
      ['dancing', 'glancing']
    ],
    notesGu: 'નદી કાવ્યમાં "dancing - glancing" અને "way - play" સુંદર પ્રાસ ઉત્પન્ન કરે છે.'
  },
  {
    id: 'stanza-7-2',
    grade: '7',
    poemNameEn: 'Smile in the Mirror',
    poemNameGu: 'અરીસામાં સ્મિત',
    sourceUnit: 'Std 7 English - Sem 1, Unit 2',
    lines: [
      'This is the bag the little one bought,',
      'This is the butterfly the little one caught,',
      'This is the kite the little one flew,',
      'This is the whistle the little one blew!'
    ],
    rhymingPairs: [
      ['bought', 'caught'],
      ['flew', 'blew']
    ],
    notesGu: 'અહીં "bought - caught" (ભૂતકાળ રૂપો) અને "flew - blew" પ્રાસયુક્ત શબ્દો છે.'
  },
  {
    id: 'stanza-8-1',
    grade: '8',
    poemNameEn: 'Q for Question',
    poemNameGu: 'પ્રશ્ન માટે ક્યૂ',
    sourceUnit: 'Std 8 English - Sem 1, Unit 1',
    lines: [
      'Why is the sky so blue and high?',
      'Why does the little bird learn to fly?',
      'Why do the fishes swim in the sea?',
      'Why does the bird sit upon the tree?'
    ],
    rhymingPairs: [
      ['high', 'fly'],
      ['sea', 'tree']
    ],
    notesGu: '"high - fly" (-y/-igh ધ્વનિ) અને "sea - tree" (-ee ધ્વનિ) પ્રાસ બેસાડે છે.'
  },
  {
    id: 'stanza-8-2',
    grade: '8',
    poemNameEn: 'Nature\'s Symphony',
    poemNameGu: 'પ્રકૃતિનું સંગીત',
    sourceUnit: 'Std 8 English - Sem 2, Unit 2',
    lines: [
      'Listen to the wind rustling in the breeze,',
      'Bending the boughs of the mighty trees.',
      'The morning birds sing loud and clear,',
      'A joyful song that all can hear.'
    ],
    rhymingPairs: [
      ['breeze', 'trees'],
      ['clear', 'hear']
    ],
    notesGu: '"breeze - trees" અને "clear - hear" કાવ્યમાં સંગીતમય લય લાવે છે.'
  }
];

// Odd One Out questions based on exams
export const ODD_ONE_OUT_DATA: OddOneOutItem[] = [
  {
    id: 'ooo-1',
    grade: '6',
    options: [
      { word: 'Ball', pronunciationGu: 'બોલ', meaningGu: 'દડો', sound: '-all' },
      { word: 'Call', pronunciationGu: 'કોલ', meaningGu: 'બોલાવવું', sound: '-all' },
      { word: 'Book', pronunciationGu: 'બુક', meaningGu: 'પુસ્તક', sound: '-ook' },
      { word: 'Tall', pronunciationGu: 'ટોલ', meaningGu: 'ઊંચું', sound: '-all' }
    ],
    correctOddWord: 'Book',
    reasonGu: 'Ball, Call અને Tall ત્રણેયનો અંતિમ ઉચ્ચાર "-all" થાય છે, જ્યારે Book નો ઉચ્ચાર "-ook" થાય છે.',
    reasonEn: 'Ball, Call, and Tall rhyme with the sound "-all", whereas Book has a different ending sound "-ook".'
  },
  {
    id: 'ooo-2',
    grade: '6',
    options: [
      { word: 'Night', pronunciationGu: 'નાઇટ', meaningGu: 'રાત', sound: '-ight' },
      { word: 'Bright', pronunciationGu: 'બ્રાઇટ', meaningGu: 'તેજસ્વી', sound: '-ight' },
      { word: 'Light', pronunciationGu: 'લાઇટ', meaningGu: 'પ્રકાશ', sound: '-ight' },
      { word: 'Tree', pronunciationGu: 'ટ્રી', meaningGu: 'ઝાડ', sound: '-ee' }
    ],
    correctOddWord: 'Tree',
    reasonGu: 'Night, Bright અને Light "-ight" પ્રાસ ધરાવે છે. Tree નો ઉચ્ચાર "-ee" સાથે પૂરો થાય છે.',
    reasonEn: 'Night, Bright, and Light share the sound "-ight". Tree ends with "-ee".'
  },
  {
    id: 'ooo-3',
    grade: '7',
    options: [
      { word: 'Flew', pronunciationGu: 'ફ્લૂ', meaningGu: 'ઊડ્યું', sound: '-ew' },
      { word: 'Blew', pronunciationGu: 'બ્લૂ', meaningGu: 'ફૂંકાયું', sound: '-ew' },
      { word: 'Knew', pronunciationGu: 'ન્યૂ', meaningGu: 'જાણ્યું', sound: '-ew' },
      { word: 'Play', pronunciationGu: 'પ્લે', meaningGu: 'રમવું', sound: '-ay' }
    ],
    correctOddWord: 'Play',
    reasonGu: 'Flew, Blew અને Knew બધાનો અંતિમ ઉચ્ચાર "-oo / -ew" છે. Play નો ઉચ્ચાર "-ay" છે.',
    reasonEn: 'Flew, Blew, and Knew rhyme together. Play ends in the "-ay" vowel sound.'
  },
  {
    id: 'ooo-4',
    grade: '7',
    options: [
      { word: 'Bought', pronunciationGu: 'બોટ', meaningGu: 'ખરીદ્યું', sound: '-ought' },
      { word: 'Caught', pronunciationGu: 'કોટ', meaningGu: 'પકડ્યું', sound: '-ought' },
      { word: 'Bell', pronunciationGu: 'બેલ', meaningGu: 'ઘંટ', sound: '-ell' },
      { word: 'Taught', pronunciationGu: 'ટોટ', meaningGu: 'શીખવ્યું', sound: '-ought' }
    ],
    correctOddWord: 'Bell',
    reasonGu: 'Bought, Caught અને Taught નો ઉચ્ચાર "-ought" છે. Bell નો ઉચ્ચાર "-ell" સાથે પૂરો થાય છે.',
    reasonEn: 'Bought, Caught, and Taught share the "-ought" rhyme, while Bell does not.'
  },
  {
    id: 'ooo-5',
    grade: '8',
    options: [
      { word: 'Hear', pronunciationGu: 'હિયર', meaningGu: 'સાંભળવું', sound: '-ear' },
      { word: 'Clear', pronunciationGu: 'ક્લિયર', meaningGu: 'ચોખ્ખું', sound: '-ear' },
      { word: 'Near', pronunciationGu: 'નિયર', meaningGu: 'નજીક', sound: '-ear' },
      { word: 'Star', pronunciationGu: 'સ્ટાર', meaningGu: 'તારો', sound: '-ar' }
    ],
    correctOddWord: 'Star',
    reasonGu: 'Hear, Clear અને Near "-ear" થી પ્રાસ બનાવે છે. Star નો ઉચ્ચાર "-ar" થાય છે.',
    reasonEn: 'Hear, Clear, and Near all rhyme with "-ear". Star has the "-ar" ending.'
  },
  {
    id: 'ooo-6',
    grade: '8',
    options: [
      { word: 'Crown', pronunciationGu: 'ક્રાઉન', meaningGu: 'તાજ', sound: '-own' },
      { word: 'Town', pronunciationGu: 'ટાઉન', meaningGu: 'નગર', sound: '-own' },
      { word: 'Brown', pronunciationGu: 'બ્રાઉન', meaningGu: 'કથ્થઈ', sound: '-own' },
      { word: 'Wing', pronunciationGu: 'વિંગ', meaningGu: 'પાંખ', sound: '-ing' }
    ],
    correctOddWord: 'Wing',
    reasonGu: 'Crown, Town અને Brown ત્રણેય "-own" થી પ્રાસ ધરાવે છે. Wing નો ઉચ્ચાર "-ing" છે.',
    reasonEn: 'Crown, Town, and Brown rhyme with "-own". Wing ends with "-ing".'
  }
];

// Comprehensive quiz questions for GSEB Std 6-8 examination format
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q-1',
    grade: '6',
    type: 'identify-rhyme',
    questionEn: 'Which word rhymes with "BELL"?',
    questionGu: '"BELL" (બેલ) શબ્દ સાથે કયો શબ્દ પ્રાસ ધરાવે છે?',
    targetWord: 'Bell',
    options: ['Tell', 'Ball', 'Book', 'Sing'],
    correctAnswer: 'Tell',
    explanationGu: '"Bell" અને "Tell" બંનેનો અંતિમ ધ્વનિ "-ell" છે.'
  },
  {
    id: 'q-2',
    grade: '6',
    type: 'identify-rhyme',
    questionEn: 'Which word rhymes with "TALL"?',
    questionGu: '"TALL" (ટોલ) શબ્દ સાથે કયો શબ્દ પ્રાસ ધરાવે છે?',
    targetWord: 'Tall',
    options: ['Fast', 'Small', 'Sun', 'Ring'],
    correctAnswer: 'Small',
    explanationGu: '"Tall" અને "Small" નો અંતિમ ધ્વનિ "-all" છે (Std 6: In the Zoo).'
  },
  {
    id: 'q-3',
    grade: '6',
    type: 'complete-rhyme',
    questionEn: 'Complete the rhyme: "The bird has a wing, and it loves to _____."',
    questionGu: 'પ્રાસ પૂર્ણ કરો: "The bird has a wing, and it loves to _____."',
    options: ['walk', 'sing', 'sleep', 'cry'],
    correctAnswer: 'sing',
    explanationGu: '"wing" સાથે "sing" પ્રાસ બેસે છે.'
  },
  {
    id: 'q-4',
    grade: '7',
    type: 'identify-rhyme',
    questionEn: 'In the poem "The River", which word rhymes with "DANCING"?',
    questionGu: '"The River" કાવ્યમાં "Dancing" સાથે કયો શબ્દ પ્રાસ બનાવે છે?',
    targetWord: 'Dancing',
    options: ['Glancing', 'Flowing', 'Singing', 'Leaping'],
    correctAnswer: 'Glancing',
    explanationGu: 'કાવ્ય પંક્તિ: "O\'er the yellow pebbles dancing, Through the flowers and foliage glancing".'
  },
  {
    id: 'q-5',
    grade: '7',
    type: 'poem-context',
    questionEn: 'In Std 7 "Smile in the Mirror", "BOUGHT" rhymes with which word?',
    questionGu: 'ધોરણ ૭ ના કાવ્યમાં "Bought" શબ્દ સાથે કયો શબ્દ પ્રાસ ધરાવે છે?',
    targetWord: 'Bought',
    options: ['Caught', 'Flew', 'Red', 'Blew'],
    correctAnswer: 'Caught',
    explanationGu: '"bought" અને "caught" બંને સમાન "-ought" ઉચ્ચાર ધરાવે છે.'
  },
  {
    id: 'q-6',
    grade: '7',
    type: 'complete-rhyme',
    questionEn: 'Complete the couplet: "The little plant lay fast asleep, in the rich dark soil so _____."',
    questionGu: 'પ્રાસ પંક્તિ પૂર્ણ કરો: "The little plant lay fast asleep, in the rich dark soil so _____."',
    options: ['deep', 'high', 'wide', 'green'],
    correctAnswer: 'deep',
    explanationGu: '"asleep" સાથે "deep" પ્રાસ ધરાવે છે (-eep sound).'
  },
  {
    id: 'q-7',
    grade: '8',
    type: 'identify-rhyme',
    questionEn: 'Which word rhymes with "STAR" from Std 8 poem "Q for Question"?',
    questionGu: 'ધોરણ ૮ ના "Q for Question" કાવ્યમાં "STAR" સાથે કયો શબ્દ પ્રાસ ધરાવે છે?',
    targetWord: 'Star',
    options: ['Far', 'Sky', 'Sun', 'Sea'],
    correctAnswer: 'Far',
    explanationGu: '"Star" અને "Far" સમાન "-ar" ધ્વનિ ધરાવે છે.'
  },
  {
    id: 'q-8',
    grade: '8',
    type: 'identify-rhyme',
    questionEn: 'Which of the following rhymes with "CROWN"?',
    questionGu: 'નીચેનામાંથી કયો શબ્દ "CROWN" (ક્રાઉન) સાથે પ્રાસ બેસાડે છે?',
    targetWord: 'Crown',
    options: ['Town', 'King', 'Ring', 'Cold'],
    correctAnswer: 'Town',
    explanationGu: '"Crown" અને "Town" બંને "-own" ધ્વનિ ધરાવે છે.'
  },
  {
    id: 'q-9',
    grade: '8',
    type: 'complete-rhyme',
    questionEn: 'Peter the Parrot opened his beak, to the friendly students he began to _____!',
    questionGu: 'પ્રાસ પંક્તિ પૂર્ણ કરો: "Peter the Parrot opened his beak, to the friendly students he began to _____!"',
    options: ['fly', 'speak', 'eat', 'run'],
    correctAnswer: 'speak',
    explanationGu: '"beak" (ચાંચ) અને "speak" (બોલવું) પ્રાસયુક્ત શબ્દો છે.'
  },
  {
    id: 'q-10',
    grade: '8',
    type: 'identify-rhyme',
    questionEn: 'Which word rhymes with "BREEZE"?',
    questionGu: '"BREEZE" (મંદ પવન) સાથે કયો શબ્દ પ્રાસ ધરાવે છે?',
    targetWord: 'Breeze',
    options: ['Trees', 'Bells', 'Rivers', 'Night'],
    correctAnswer: 'Trees',
    explanationGu: '"Breeze" અને "Trees" સમાન "-eeze" ધ્વનિ ધરાવે છે.'
  }
];
