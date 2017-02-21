var softwareItems = [
	{Name: 'Mail relay expertise', CPU: 0, Mem: 0, Band: 0, Size: 0, Income: 0, abpBase: 5, abpGrow: 10, abpMax: 50},
	{Name: 'Share relay expertise', CPU: 0, Mem: 0, Band: 0, Size: 0, Income: 0, abpBase: 5, abpGrow: 10, abpMax: 50},
	{Name: 'Software dealer connections', CPU: 0, Mem: 0, Band: 0, Size: 0, Income: 0, abpBase: 5, abpGrow: 15, abpMax: 50},
	{Name: 'Hardware dealer connections', CPU: 0, Mem: 0, Band: 0, Size: 0, Income: 0, abpBase: 10, abpGrow: 20, abpMax: 50},
	{Name: 'Research Wizard', CPU: 0, Mem: 0, Band: 0, Size: 0, Income: 0, abpBase: 10, abpGrow: 15, abpMax: 50},
	{Name: 'Firewall Protect', CPU: 50, Mem: 3, Band: 0, Size: 0.00768, Income: 0, abpBase: 3, abpGrow: 3, abpMax: 75},
	{Name: 'Firewall Bypass', CPU: 80, Mem: 7, Band: 0, Size: 0.0384, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Password Protect', CPU: 100, Mem: 5, Band: 0, Size: 0.0087, Income: 0, abpBase: 3, abpGrow: 3, abpMax: 75},
	{Name: 'Password Break', CPU: 200, Mem: 12.5, Band: 0, Size: 0.087, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Hide Files', CPU: 100, Mem: 9, Band: 0, Size: 0.1024, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Unhide Files', CPU: 100, Mem: 5, Band: 0, Size: 0.2048, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Encryptor', CPU: 600, Mem: 30, Band: 0, Size: 0.35, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Decryptor', CPU: 900, Mem: 40, Band: 0, Size: 0.45, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Spyware', CPU: 300, Mem: 0.9, Band: 0, Size: 0.0512, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Anti-Spyware', CPU: 150, Mem: 22.5, Band: 0, Size: 0.1024, Income: 0, abpBase: 3, abpGrow: 3, abpMax: 75},
	{Name: 'Malware Logic Bomb', CPU: 300, Mem: 5, Band: 0, Size: 0.6, Income: 0, abpBase: 2, abpGrow: 4, abpMax: 75},
	{Name: 'Malware Overload Bomb', CPU: 550, Mem: 7, Band: 0, Size: 1, Income: 0, abpBase: 2, abpGrow: 4, abpMax: 75},
	{Name: 'Malware Anti-Virus', CPU: 300, Mem: 1.5, Band: 0, Size: 0.2048, Income: 0, abpBase: 3, abpGrow: 5, abpMax: 75},
	{Name: 'Adware Spam Daemon', CPU: 50, Mem: 5, Band: 3,Size: 0.1024, Income: 3, abpBase: 3, abpGrow: 3, abpMax: 75},
	{Name: 'Adware Anti-Virus', CPU: 250, Mem: 10, Band: 0, Size: 0.1784, Income: 0, abpBase: 5, abpGrow: 5, abpMax: 75},
	{Name: 'File Share Virus', CPU: 250, Mem: 10, Band: 50, Size: 3.2768, Income: 60, abpBase: 3, abpGrow: 3, abpMax: 75},
	{Name: 'File Share Anti-Virus', CPU: 500, Mem: 20, Band: 0, Size: 1.024, Income: 0, abpBase: 5, abpGrow: 5, abpMax: 75},
	{Name: 'Sniffer Daemon', CPU: 20, Mem: 3, Band: 0, Size: 0.1548, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'IP Cloaker', CPU: 100, Mem: 6, Band: 0, Size: 0.1548, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'IP Scanner', CPU: 200, Mem: 10, Band: 0, Size: 0.3784, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75}, // Often called nmap scanner
	{Name: 'Scan Blocker', CPU: 200, Mem: 10, Band: 0, Size: 0.2048, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Data Uplink Hijack', CPU: 300, Mem: 20, Band: 1, Size: 0.4048, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Data Hijack Anti-Virus', CPU: 500, Mem: 30, Band: 0, Size: 0.2048, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Log Deleter', CPU: 30, Mem: 1, Band: 0, Size: 0.00512, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: 'Log UnDeleter', CPU: 100, Mem: 5, Band: 0, Size: 0.1536, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75}, // might be incorrect
	{Name: 'Virus Breaker', CPU: 300, Mem: 11.5, Band: 0, Size: 0.1784, Income: 0, abpBase: 3, abpGrow: 3, abpMax: 75}, // research in detail
	{Name: 'Revelation Virus', CPU: 10000, Mem: 600, Band: 400, Size: 20.48, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0},
	{Name: 'Faith Anti-Virus', CPU: 20000, Mem: 1200, Band: 0, Size: 20.48, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0},
	{Name: 'Virus Identifier', CPU: 30, Mem: 1.15, Band: 0, Size: 0.1784, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75}, // might be incorrect
	{Name: 'Process Tracer', CPU: 2400, Mem: 92, Band: 0, Size: 0.1784, Income: 0, abpBase: 1, abpGrow: 1, abpMax: 75},
	{Name: '/root/OS/os.sock', CPU: 15000, Mem: 5, Band: 0, Size: 1.024, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0},
	{Name: 'Robber Baron', CPU: 7500, Mem: 300, Band: 1500,Size: 98.304, Income: 1200, abpBase: 35, abpGrow: 35, abpMax: 75},
	{Name: 'Robber Baron Anti-Virus', CPU: 15000, Mem: 600, Band: 0, Size: 30.72, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0}, // seems unfair to me
	{Name: 'Remote Attack Disruptor', CPU: 2400, Mem: 92, Band: 0, Size: 0.1784, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0},
	{Name: 'IP Leech', CPU: 450, Mem: 1.35, Band: 0, Size: 0.0768, Income: 0, abpBase: 2, abpGrow: 2, abpMax: 75},
	{Name: 'IP Leech Anti-Virus', CPU: 225, Mem: 21.6, Band: 0, Size: 0.1536, Income: 0, abpBase: 2, abpGrow: 2, abpMax: 75},
	{Name: 'Remote Virus Injector', CPU: 2500, Mem: 125, Band: 2, Size: 4.096, Income: 0, abpBase: 35, abpGrow: 35, abpMax: 75},
	{Name: 'Remote Injector Anti-Virus', CPU: 5000, Mem: 250, Band: 0, Size: 4.096, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0}, // seems unfair to me
	{Name: 'Overload Signer', CPU: 2400, Mem: 92, Band: 0, Size: 0.1784, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0},
	{Name: 'Mutant Revelation Virus', CPU: 50000, Mem: 3000, Band: 2000, Size: 98.304, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0},
	{Name: 'MutantR Accelerator', CPU: 2400, Mem: 92, Band: 100, Size: 0.1784, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0},
	{Name: 'MutantR Decelerator', CPU: 9600, Mem: 278, Band: 0, Size: 0.1784, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0},
	{Name: 'MutantR Acc Stopper', CPU: 1200, Mem: 46, Band: 0, Size: 0.1784, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0},
	{Name: 'MutantR Dec Stopper', CPU: 1200, Mem: 46, Band: 0, Size: 0.1784, Income: 0, abpBase: 0, abpGrow: 0, abpMax: 0}
]; // the incorrect items mentioned above are due to potentially faulty information provided by the game itself

// virii.html legacy items
var asd = {Name: 'Adware Spam Daemon', CPU: 50, Mem: 5, Band: 3,Size: 0.1024, Income: 3};
var fsv = {Name: 'File Share Virus', CPU: 250, Mem: 10, Band: 50,Size: 3.2768, Income: 60};
var rbv = {Name: 'Robber Baron', CPU: 7500, Mem: 300, Band: 1500,Size: 98.304, Income: 1200};

var CPU_COST = 150; //50MHz
var GOLD_CPU_COST = 120;
var CPU_QUAN = 50;

var HDD_COST = 300; //1 GB
var GOLD_HDD_COST = 240;
var HDD_QUAN = 1;

var MEM_COST = 150; //3 Mb
var GOLD_MEM_COST = 120;
var MEM_QUAN = 3;

var BAND_COST = 300; //1 kbps
var GOLD_BAND_COST = 240;
var BAND_QUAN = 1;

var abp_rw = extHc / 100; // Reduces input to a %
var RESEARCH_COST = 100; // 100HPD per hour of research
var GOLD_RESEARCH_COST = 80; // Gold is 20% discount and is always calculated first