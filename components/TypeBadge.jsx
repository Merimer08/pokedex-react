import React from 'react';
import { TYPE_COLORS } from '../constants';

export const TypeBadge = ({ typeName }) => {
    const colorClass = TYPE_COLORS[typeName] || 'bg-gray-400 border-gray-500';
    return (
        <span className={`px-4 py-1 text-sm font-bold text-white capitalize rounded-full shadow-md border-2 ${colorClass}`}>
            {typeName}
        </span>
    );
};
