import{Clan} from "../model/Clan.js"
import {url} from "../utils/constants.js"


export async function getSpanishClans() {
    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: 'https://api.clashroyale.com/v1/clans?locationId=57000218',
            token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQxMDUxOWM0LTFkODQtNDJjNi04YzY1LWZkNjcxOTQ0ZWZkOCIsImlhdCI6MTU0NTA2MzU3Nywic3ViIjoiZGV2ZWxvcGVyL2VjNWI5MjQyLTA2NzAtMjcwZi00ZWUxLTdhMGY1MDA3YTY0MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4xOTQuNzIuMTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.WMceu7E5rTjLHGUjyMgao1NOP3Yh9sann8WmRMHJ46KkQBFDnkdwo7EJ5yMxd-r9wHH3qFOA1rZb9iup_ABQkQ'
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    })

    let clans = await response.json()
    clans = clans.items.map(clan => {
        return new Clan(clan.tag,clan.name,clan.members,clan.clanChestLevel,clan.clanScore,clan.location.name);
    })
    return clans;
}

export async function getClanByName() {
    let name = document.getElementById('clanName').value
    name = name.split(' ').join('%20')

    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url+'clans?name='+name,
            token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQxMDUxOWM0LTFkODQtNDJjNi04YzY1LWZkNjcxOTQ0ZWZkOCIsImlhdCI6MTU0NTA2MzU3Nywic3ViIjoiZGV2ZWxvcGVyL2VjNWI5MjQyLTA2NzAtMjcwZi00ZWUxLTdhMGY1MDA3YTY0MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4xOTQuNzIuMTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.WMceu7E5rTjLHGUjyMgao1NOP3Yh9sann8WmRMHJ46KkQBFDnkdwo7EJ5yMxd-r9wHH3qFOA1rZb9iup_ABQkQ'
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    })

    return await response.json()
}

export async function getClanByTag() {

    let tag = document.getElementById('clanTag').value
    tag = tag.split('#').join('%23')

    let objTract = {
        MethodName: 'sendAPI',
        params: {
            url: url+'clans/'+tag,
            token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQxMDUxOWM0LTFkODQtNDJjNi04YzY1LWZkNjcxOTQ0ZWZkOCIsImlhdCI6MTU0NTA2MzU3Nywic3ViIjoiZGV2ZWxvcGVyL2VjNWI5MjQyLTA2NzAtMjcwZi00ZWUxLTdhMGY1MDA3YTY0MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4xOTQuNzIuMTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.WMceu7E5rTjLHGUjyMgao1NOP3Yh9sann8WmRMHJ46KkQBFDnkdwo7EJ5yMxd-r9wHH3qFOA1rZb9iup_ABQkQ'
        }
    }

    const response = await fetch("https://esliceu.codiblau.com/clashRoyale.php", {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    })

    return await response.json()
}
