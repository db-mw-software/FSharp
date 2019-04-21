import { Component, OnInit } from '@angular/core';

import { of, Observable } from 'rxjs';

import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-artisttrain',
  templateUrl: './artisttrain.component.html',
  styleUrls: ['./artisttrain.component.css']
})
export class ArtisttrainComponent implements OnInit {

  offlineTesting: boolean = true;
  artists$: Observable<Object>;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    if(this.offlineTesting) {
      this.artists$ = this.sampleArtistsResponse();
      console.log(this.artists$);
    }
    else {
      this.musicService.artists().subscribe( (response) => {
        this.artists$ = of(response);
        console.log(response);
      });
    }
  }

  sampleArtistsResponse(): Observable<Object> {
    const response = `[
    {
        "artistID": 1861,
        "name": "Jawbox",
        "photoURL": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/1861-jawbox?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 4179,
        "name": "Fucked Up",
        "photoURL": "https://s1.ticketm.net/dam/a/82b/4133e40b-bf1c-434c-ab60-45b410a3582b_951331_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/4179-fucked-up?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 35
    },
    {
        "artistID": 18157,
        "name": "Cosmonauts",
        "photoURL": "https://s1.ticketm.net/dam/a/b42/da5d20d1-92f8-4a72-bf3e-217ab4ecbb42_841541_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/18157-cosmonauts?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 15,
        "genreID2": 15
    },
    {
        "artistID": 19877,
        "name": "Pedro the Lion",
        "photoURL": "https://s1.ticketm.net/dam/a/f4b/27128bd3-8885-4c1e-aa53-d57b2e7a0f4b_939541_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/19877-pedro-the-lion?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 24336,
        "name": "Guster",
        "photoURL": "https://s1.ticketm.net/dam/a/8d8/186faab0-3a2b-4e3d-9e8f-3a795bffb8d8_867921_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/24336-guster?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 29647,
        "name": "Shooter Jennings",
        "photoURL": "https://s1.ticketm.net/dam/a/69d/a0803437-6c8b-4064-b9cf-cd10d742769d_276901_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/29647-shooter-jennings?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 4,
        "genreID2": 4
    },
    {
        "artistID": 29793,
        "name": "Snarky Puppy",
        "photoURL": "https://s1.ticketm.net/dam/a/e96/08a80a52-29da-4164-ba43-c3e3ba604e96_910921_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/29793-snarky-puppy?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 8,
        "genreID2": 8
    },
    {
        "artistID": 37055,
        "name": "Peter Hook",
        "photoURL": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/37055-peter-hook?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 41570,
        "name": "Xeno & Oaklander",
        "photoURL": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/41570-xeno-and-oaklander?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 42670,
        "name": "Tokyo Police Club",
        "photoURL": "https://s1.ticketm.net/dam/a/6c4/1a6b0f81-fa41-4993-b65d-add3c8d4d6c4_66621_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/42670-tokyo-police-club?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 44546,
        "name": "Royal Trux",
        "photoURL": "https://s1.ticketm.net/dam/a/593/139f22e9-2317-43b2-bf08-603e146b5593_1018021_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/44546-royal-trux?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 14
    },
    {
        "artistID": 44666,
        "name": "IAMX",
        "photoURL": "https://s1.ticketm.net/dam/a/9ad/981ebcf2-3294-4bab-8f69-561faa94c9ad_975011_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/44666-iamx?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 5,
        "genreID2": 5
    },
    {
        "artistID": 46950,
        "name": "Rosabel",
        "photoURL": "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/46950-rosabel?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 5,
        "genreID2": 22
    },
    {
        "artistID": 53745,
        "name": "The Soul Rebels",
        "photoURL": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/53745-soul-rebels?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 11
    },
    {
        "artistID": 67100,
        "name": "Built to Spill",
        "photoURL": "https://s1.ticketm.net/dam/a/b07/db0d4ecd-5cc4-4d10-bf39-20ae8efddb07_848571_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/67100-built-to-spill?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 11
    },
    {
        "artistID": 68637,
        "name": "Germ",
        "photoURL": "https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/68637-germ?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 7,
        "genreID2": 7
    },
    {
        "artistID": 75681,
        "name": "God Is an Astronaut",
        "photoURL": "https://s1.ticketm.net/dam/a/975/161dcc7c-67f1-412f-9e57-a2837db90975_959891_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/75681-god-is-an-astronaut?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 11
    },
    {
        "artistID": 77997,
        "name": "Neurosis",
        "photoURL": "https://s1.ticketm.net/dam/a/a7c/34c937e9-1a46-4043-a56e-a68231d27a7c_681901_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/77997-neurosis?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 82596,
        "name": "Intervals",
        "photoURL": "https://s1.ticketm.net/dam/a/4ce/bd333862-6b8f-452d-889e-0db0b5d594ce_582501_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/82596-intervals?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 9,
        "genreID2": 32
    },
    {
        "artistID": 85293,
        "name": "Xiu Xiu",
        "photoURL": "https://s1.ticketm.net/dam/a/14b/580a1357-6e3a-40df-90d3-9d636885c14b_266331_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/85293-xiu-xiu?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 96609,
        "name": "Eels",
        "photoURL": "https://s1.ticketm.net/dam/a/1fe/d65220e3-44e3-4cb9-88e3-d78b8d6cd1fe_1008841_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/96609-eels?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 97426,
        "name": "Electric Wizard",
        "photoURL": "https://s1.ticketm.net/dam/a/3fd/c32f6b64-d9c4-4093-912d-d2c4690e33fd_642691_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/97426-electric-wizard?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 9,
        "genreID2": 32
    },
    {
        "artistID": 105911,
        "name": "Movements",
        "photoURL": "https://s1.ticketm.net/dam/a/162/c3dbc88a-177d-4809-acb9-91159ee44162_1008851_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/105911-movements?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 14
    },
    {
        "artistID": 110160,
        "name": "Tim Hecker",
        "photoURL": "https://s1.ticketm.net/dam/a/841/7d513fbe-db0f-41c3-8a8b-e5806426b841_291201_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/110160-tim-hecker?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 14,
        "genreID2": 20
    },
    {
        "artistID": 123676,
        "name": "Omni",
        "photoURL": "https://s1.ticketm.net/dam/a/32f/413cd4d6-6e1f-4354-8dea-c6a8f4a6532f_421701_TABLET_LANDSCAPE_16_9.jpg",
        "websiteURL": "http://www.songkick.com/artists/123676-omni?utm_source=56832&utm_medium=partner",
        "audioSample": null,
        "genreID1": 5,
        "genreID2": 22
    }
]`;
    return of(<Object>JSON.parse(response));
  }
}
