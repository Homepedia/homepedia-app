import { department11 } from '@/utils/departments/department11';
import { department24 } from '@/utils/departments/department24';
import { department27 } from '@/utils/departments/department27';
import { department28 } from '@/utils/departments/department28';
import { department32 } from '@/utils/departments/department32';
import { department44 } from '@/utils/departments/department44';
import { department52 } from '@/utils/departments/department52';
import { department53 } from '@/utils/departments/department53';
import { department75 } from '@/utils/departments/department75';
import { department76 } from '@/utils/departments/department76';
import { department84 } from '@/utils/departments/department84';
import { department93 } from '@/utils/departments/department93';
import { department94 } from '@/utils/departments/department94';
import type geojson from 'geojson';

export const getFranceDepartments = (regionId: string): geojson.GeoJsonObject => {
    let res = {};

    switch (regionId) {
    case '11':
        res = department11();
        break;
    case '24':
        res = department24();
        break;
    case '27':
        res = department27();
        break;
    case '28':
        res = department28();
        break;
    case '32':
        res = department32();
        break;
    case '44':
        res = department44();
        break;
    case '52':
        res = department52();
        break;
    case '53':
        res = department53();
        break;
    case '75':
        res = department75();
        break;
    case '76':
        res = department76();
        break;
    case '84':
        res = department84();
        break;
    case '93':
        res = department93();
        break;
    case '94':
        res = department94();
        break;
    default:
        res = {};
    }

    return res as geojson.GeoJsonObject;
};
