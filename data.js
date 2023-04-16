var defaultThreads = [
    {
        id: 1,
        title: "U Busovači pretučen dječak, odgovoran vlasnik Castella",
        author: "Mujo",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "",
                date: Date.now(),
                content: "Moze biti stid i to govno od monstruma i njegove roditelje....Skupa sa ovim jadnicima sto su snimali umisto da su ucinili sve da to ga ne dodje.....Uzas.Strovo ih kazniti da to vide ne ponove nikad..."
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
